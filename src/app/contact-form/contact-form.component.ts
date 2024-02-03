import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  messageLimit: number = 250;
  messageLength: number = 0;
  disabled: boolean = false;
  formSubmitted: boolean = false;

  constructor() {}

  updateMessage(length: number): void {
    this.messageLength = length;

    this.messageLength >= this.messageLimit
      ? (this.disabled = true)
      : (this.disabled = false);
  }

  handleSubmit(name: string, email: string, phone: string, message: string): void {
    let form = {
      name,
      email,
      phone,
      message
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(form).toString(),
    })
      .then(() => {
        console.log('Form successfully submitted');
        this.formSubmitted = true;
      })
      .catch((error) => {
        alert(error);
      });
  }
}
