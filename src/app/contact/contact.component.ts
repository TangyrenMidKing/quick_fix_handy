import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EmailService } from '../_service/email_service';

@Component({
  selector: 'app-contact',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    TranslateModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting: boolean = false;
  showContactResult: boolean = false;

  constructor(private fb: FormBuilder, private emailService: EmailService, private translate: TranslateService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      preferredTime: ['', Validators.required],
      address: ['', Validators.required],


      comment: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.isSubmitting = true;
    this.showContactResult = false;

    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.isSubmitting = false;
      this.showContactResult = true;
      this.emailService
        .sendEmail({
          customer_name: this.contactForm.value.name,
          customer_email: this.contactForm.value.email,
          customer_phone: this.contactForm.value.phone,
          customer_address: this.contactForm.value.address,
          customer_preferred_time: this.contactForm.value.preferredTime,
          subject: '新预约请求来自' + this.contactForm.value.name,
          customer_comment: this.contactForm.value.comment,
        })
        .then(() => {
          console.log('Email sent successfully');
          this.emailService.sendCustomerEmail(this.contactForm.value.email, 
            this.translate.instant('emailSubject'), 
            this.translate.instant('emailGreeting') + this.contactForm.value.name, 
            this.translate.instant('emailBody'), 
            this.translate.instant('emailSignature'), 
            this.translate.instant('emailName'));
        })




        .catch((error) => {
          console.error('Error sending email:', error);
        });




    } else {
      console.log('Form is invalid');
      this.isSubmitting = false;
    }
  }
}
