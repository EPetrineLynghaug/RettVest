import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  messageLimit: number = 250;
  messageLength: number = 0;
  disabled: boolean = false;
  formSubmitted: boolean = false;

  constructor() {}

  ngAfterViewInit(): void {
    let form: any = document.querySelector('form');

    form.addEventListener('submit', this.handleSubmit);
  }

  updateMessage(length: number): void {
    this.messageLength = length;

    this.messageLength >= this.messageLimit
      ? (this.disabled = true)
      : (this.disabled = false);
  }

  handleSubmit(event: any) {
    event.preventDefault();

    const myForm: any = event.target;
    const formData: any = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        console.log(res);
        alert('Skjema sent!');
      })
      .catch((err) => alert(err));
  }
}
