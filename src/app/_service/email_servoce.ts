// import { environment } from '../../environments/environment';



// export class EmailService {
//   private sgMail = require('@sendgrid/mail');

//   constructor() {
//     this.sgMail.setApiKey(environment.sendGridApiKey);
//   }

//   async sendEmail(to: string, subject: string, text: string, html: string) {
//     const msg = {
//       to: to,
//       from: 'likewiseventure@gmail.com',
//       subject: subject,
//       text: text,
//       html: html,
//     };

//     try {
//       await this.sgMail.send(msg);
//       console.log('Email sent successfully');
//     } catch (error: any) {
//       console.error('Error sending email:', error);
//       if (error.response) {
//         console.error('Response body:', error.response.body);
//       }
//     }
//   }
// }



