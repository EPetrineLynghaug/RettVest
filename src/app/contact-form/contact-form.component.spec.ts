import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let fixture: ComponentFixture<ContactFormComponent>;
  let component: ContactFormComponent;
  let fetchSpy: jasmine.Spy<typeof window.fetch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContactFormComponent,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fetchSpy = spyOn(window, 'fetch').and.resolveTo(new Response('', { status: 200 }));
    fixture.detectChanges();
    getForm().addEventListener('submit', (event) => event.preventDefault());
  });

  function getForm(): HTMLFormElement {
    const form = fixture.nativeElement.querySelector('form[name="kontakt"]') as HTMLFormElement | null;
    expect(form).withContext('expected visible contact form').not.toBeNull();
    return form as HTMLFormElement;
  }

  function getControl(name: string): HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement {
    const control = fixture.nativeElement.querySelector(`[name="${name}"]`) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    expect(control).withContext(`expected ${name} control`).not.toBeNull();
    return control as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
  }

  async function setControlValue(name: string, value: string): Promise<void> {
    const control = getControl(name);
    control.value = value;
    control.dispatchEvent(new Event(control instanceof HTMLSelectElement ? 'change' : 'input'));
    fixture.detectChanges();
    await fixture.whenStable();
  }

  async function fillValidForm(email = 'kunde@example.com'): Promise<void> {
    await setControlValue('navn', 'Kari Nordmann');
    await setControlValue('email', email);
    await setControlValue('telefon', '93487399');
    await setControlValue('henvendelse_type', 'Hjemmekennel');
    await setControlValue('hundens_navn', 'Jazz');
    await setControlValue('fra_dato', '2026-08-01');
    await setControlValue('til_dato', '2026-08-03');
    await setControlValue('melding', 'Hei, jeg ønsker å spørre om ledig plass.');
  }

  async function submitForm(formDirective?: NgForm): Promise<void> {
    await component.handleSubmit({
      preventDefault: () => undefined,
      target: getForm(),
    } as unknown as SubmitEvent, formDirective);
    fixture.detectChanges();
    await fixture.whenStable();
  }

  it('renders the required email field', () => {
    const label = fixture.nativeElement.querySelector('label[for="email"]') as HTMLLabelElement | null;
    const input = getControl('email') as HTMLInputElement;

    expect(label?.textContent).toContain('E-postadresse');
    expect(input.id).toBe('email');
    expect(input.type).toBe('email');
    expect(input.autocomplete).toBe('email');
    expect(input.required).toBeTrue();
    expect(input.getAttribute('aria-describedby')).toBe('email-error');
  });

  it('requires an email address before submitting', async () => {
    await fillValidForm('');
    await setControlValue('email', '   ');

    const markAllAsTouched = jasmine.createSpy('markAllAsTouched');
    await submitForm({ control: { markAllAsTouched } } as unknown as NgForm);

    expect(component.errors.email).toBe('Skriv inn e-postadressen din.');
    expect(markAllAsTouched).toHaveBeenCalled();
    expect(fetchSpy).not.toHaveBeenCalled();

    fixture.detectChanges();
    const input = getControl('email');
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(fixture.nativeElement.textContent).toContain('Skriv inn e-postadressen din.');
  });

  it('rejects an invalid email format', async () => {
    await fillValidForm('ikke-en-epost');

    await submitForm();

    expect(component.errors.email).toBe('Skriv inn en gyldig e-postadresse.');
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('accepts a valid email address', async () => {
    await fillValidForm('kunde@example.com');

    component.validateField('email');
    fixture.detectChanges();

    expect(component.errors.email).toBeUndefined();
  });

  it('includes the trimmed email value in the Netlify payload', async () => {
    await fillValidForm('  kunde@example.com  ');

    await submitForm();

    expect(fetchSpy).toHaveBeenCalledOnceWith('/', jasmine.objectContaining({
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }));

    const requestInit = fetchSpy.calls.mostRecent().args[1] as RequestInit;
    const payload = new URLSearchParams(requestInit.body as string);

    expect(payload.get('form-name')).toBe('kontakt');
    expect(payload.get('email')).toBe('kunde@example.com');
    expect(payload.get('bot-field')).toBe('');
    expect(payload.get('melding')).toBe('Hei, jeg ønsker å spørre om ledig plass.');
  });

  it('keeps the honeypot and Netlify submit flow working', async () => {
    await fillValidForm();

    const form = getForm();
    const honeypot = form.querySelector('[name="bot-field"]') as HTMLInputElement | null;

    expect(form.getAttribute('data-netlify')).toBe('true');
    expect(form.getAttribute('netlify-honeypot')).toBe('bot-field');
    expect(honeypot).not.toBeNull();

    await submitForm();

    expect(component.showSuccess).toBeTrue();
    expect(component.errors.submit).toBeUndefined();
  });

  it('disables the submit button while submitting and prevents duplicate submits', async () => {
    let resolveFetch: (response: Response) => void = () => undefined;
    fetchSpy.and.returnValue(new Promise<Response>((resolve) => {
      resolveFetch = resolve;
    }));
    await fillValidForm();

    const submitPromise = component.handleSubmit({
      preventDefault: () => undefined,
      target: getForm(),
    } as unknown as SubmitEvent);
    fixture.detectChanges();

    expect(component.isSubmitting).toBeTrue();
    expect((fixture.nativeElement.querySelector('button[type="submit"]') as HTMLButtonElement).disabled).toBeTrue();

    await component.handleSubmit({
      preventDefault: () => undefined,
      target: getForm(),
    } as unknown as SubmitEvent);

    expect(fetchSpy).toHaveBeenCalledTimes(1);

    resolveFetch(new Response('', { status: 200 }));
    await submitPromise;
    fixture.detectChanges();

    expect(component.isSubmitting).toBeFalse();
    expect(component.showSuccess).toBeTrue();
  });

  it('does not render an active form when the kill switch disables it', () => {
    component.contactFormEnabled = false;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('form[name="kontakt"]')).toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Kontaktskjemaet er midlertidig stengt.');
  });
});
