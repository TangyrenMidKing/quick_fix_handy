import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes this service globally available
})
export class EmailService {
  constructor() {}

  sendEmail(templateParams: any) {
    return emailjs.send(
      'service_29jfu4t',
      'template_y86rkkj',
      templateParams,
      'RDdvp2B_RTFCAIxT8'
    );
  }

  sendCustomerEmail(to: string, subject: string, greeting: string, body: string, signature: string, name: string) {
    return emailjs.send(
      'service_29jfu4t',
      'template_wjzq732',
      { to: to, subject: to, greeting: greeting, body: body, signature: signature, name: name },
      'RDdvp2B_RTFCAIxT8'
    );
  }
}
