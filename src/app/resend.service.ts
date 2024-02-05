import { Injectable } from '@angular/core';

declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class ResendService {

  pw: string = '5CF7E9D84AD23939546F7BA33AD9F5C3CFBF';

  constructor() { }

  async send() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Port: 2525,
      Username: "post@kilavila.com",
      Password: this.pw,
      To: 'christer.kilavik@protonmail.com',
      From: "post@kilavila.com",
      Subject: "This is the subject",
      Body: "And this is the body"
    })
    .then((message: any) => alert(message));
  }

}
