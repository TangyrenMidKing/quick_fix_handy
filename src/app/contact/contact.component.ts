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
import { TranslateModule } from '@ngx-translate/core';

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

  constructor(private fb: FormBuilder) {
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
      setTimeout(() => {
        this.isSubmitting = false;
        this.showContactResult = true;
        // this.emailService.sendEmail(
        //   'likewiseventure@gmail.com',
        //   'Contact Form Submission',
        //   'Thank you for contacting us!',
        //   'We will get back to you soon.'
        // );
      }, 2000);
    } else {
      console.log('Form is invalid');
      this.isSubmitting = false;
    }
  }
}
