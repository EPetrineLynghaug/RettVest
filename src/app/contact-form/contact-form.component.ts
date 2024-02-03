import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements AfterViewInit {
  messageLimit: number = 250;
  messageLength: number = 0;
  disabled: boolean = false;
  formSubmitted: boolean = false;

  constructor() {}

  ngAfterViewInit(): void {
    let form: HTMLFormElement = document.querySelector('.contact-form') as HTMLFormElement;
    form.addEventListener('submit', this.handleSubmit);
  }

  updateMessage(length: number): void {
    this.messageLength = length;

    this.messageLength >= this.messageLimit
      ? (this.disabled = true)
      : (this.disabled = false);
  }

  handleSubmit(event: any): void {
    event.preventDefault();

    const myForm: any = event.target;
    const formData: any = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        console.log('Form successfully submitted');
        this.formSubmitted = true;
      })
      .catch((error) => {
        alert(error);
      });
  };
}
