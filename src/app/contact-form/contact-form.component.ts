import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit {

  messageLimit: number = 250;
  messageLength: number = 0;
  disabled: boolean = false;

  constructor() {}

  ngOnInit(): void { }

  updateMessage(length: number): void {
    this.messageLength = length;
    
    this.messageLength >= this.messageLimit
      ? this.disabled = true
      : this.disabled = false;
  }

}
