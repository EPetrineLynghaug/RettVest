import { CommonModule } from '@angular/common';
import { AfterContentInit, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ResendService } from '../resend.service';


declare const hbspt: any;

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
export class ContactFormComponent implements AfterContentInit {
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

  constructor(
    private formBuilder: FormBuilder,
    private resend: ResendService,
  ) {}

  ngAfterContentInit() {
    hbspt.forms.create({
      region: "eu1",
      portalId: "144082751",
      formId: "d6359489-be5d-4c6a-9d83-ab7ed018e729",
      target: "#hubspotForm"
    });
  }

  updateMessage(length: number): void {
    this.messageLength = length;

    this.messageLength >= this.messageLimit
      ? (this.disabled = true)
      : (this.disabled = false);
  }

  sendForm() {
    this.resend.send();
  }

}