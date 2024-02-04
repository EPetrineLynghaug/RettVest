import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  messageLimit: number = 250;
  messageLength: number = 0;
  disabled: boolean = false;
  formSubmitted: boolean = false;

  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: [
      '',
      [Validators.required, Validators.email],
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ],
    ],
    message: [
      '',
      [
        Validators.required,
        Validators.maxLength(this.messageLimit)
      ]
    ],
  });

  constructor(private formBuilder: FormBuilder) {}

  updateMessage(length: number): void {
    this.messageLength = length;

    this.messageLength >= this.messageLimit
      ? (this.disabled = true)
      : (this.disabled = false);
  }

  sendForm() {
    console.log(this.contactForm.value.toString());
  }

}