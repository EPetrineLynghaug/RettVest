import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { contactFormEnabled } from './contact-form.config.generated';

type ContactFormData = {
  navn: string;
  epost: string;
  telefon: string;
  henvendelse_type: string;
  hundens_navn: string;
  fra_dato: string;
  til_dato: string;
  melding: string;
};

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  @ViewChild('successMessage') successMessage?: ElementRef<HTMLDivElement>;

  formData: ContactFormData = this.getEmptyFormData();
  errors: Partial<Record<keyof ContactFormData | 'submit', string>> = {};
  isSubmitting = false;
  showSuccess = false;
  contactFormEnabled = contactFormEnabled;

  async handleSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    if (!this.contactFormEnabled) {
      return;
    }

    this.showSuccess = false;
    this.errors = this.getValidationErrors();

    if (Object.keys(this.errors).length > 0) {
      return;
    }

    const form = event.target as HTMLFormElement;
    const formBody = new URLSearchParams();
    new FormData(form).forEach((value, key) => {
      formBody.append(key, value.toString());
    });

    this.isSubmitting = true;
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });

      if (!response.ok) {
        throw new Error('Netlify Forms submission failed.');
      }

      this.formData = this.getEmptyFormData();
      form.reset();
      this.showSuccess = true;

      setTimeout(() => {
        this.successMessage?.nativeElement.focus();
      });
    } catch {
      this.errors.submit = 'Noe gikk galt. Prøv igjen, eller kontakt oss direkte på telefon.';
    } finally {
      this.isSubmitting = false;
    }
  }

  clearSuccess(): void {
    this.showSuccess = false;
  }

  validateField(field: keyof ContactFormData): void {
    const fieldErrors = this.getValidationErrors();

    if (fieldErrors[field]) {
      this.errors[field] = fieldErrors[field];
      return;
    }

    delete this.errors[field];

    if (field === 'fra_dato' || field === 'til_dato') {
      if (fieldErrors.fra_dato) {
        this.errors.fra_dato = fieldErrors.fra_dato;
      } else {
        delete this.errors.fra_dato;
      }
    }
  }

  private getValidationErrors(): Partial<Record<keyof ContactFormData, string>> {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+0-9 ]{5,}$/;

    if (!this.formData.navn.trim()) {
      errors.navn = 'Skriv inn navn.';
    }

    if (!emailPattern.test(this.formData.epost.trim())) {
      errors.epost = 'Skriv inn en gyldig e-postadresse.';
    }

    if (!phonePattern.test(this.formData.telefon.trim())) {
      errors.telefon = 'Skriv inn telefonnummer.';
    }

    if (!this.formData.henvendelse_type) {
      errors.henvendelse_type = 'Velg hva henvendelsen gjelder.';
    }

    if (this.formData.melding.trim().length < 5) {
      errors.melding = 'Skriv en kort melding.';
    }

    if (
      this.formData.fra_dato &&
      this.formData.til_dato &&
      this.formData.til_dato < this.formData.fra_dato
    ) {
      errors.fra_dato = 'Til-dato kan ikke være før fra-dato.';
    }

    return errors;
  }

  private getEmptyFormData(): ContactFormData {
    return {
      navn: '',
      epost: '',
      telefon: '',
      henvendelse_type: '',
      hundens_navn: '',
      fra_dato: '',
      til_dato: '',
      melding: '',
    };
  }
}
