import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root', // Makes this service globally available
})
export class EmailService {
  constructor() {}

  sendEmail(templateParams: any) {
    return emailjs.send(
      'service_02f30m3',
      'template_wjzq732',
      templateParams,
      'RDdvp2B_RTFCAIxT8'
    );
  }
}
