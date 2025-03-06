import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Add this
import { ReactiveFormsModule } from '@angular/forms'; // Add this

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Now valid
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  verifyForm: FormGroup;
  currentStep = 1;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.verifyForm = this.fb.group({
      code: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
  }

  onStep1Submit() {
    if (this.registerForm.valid) {
      // Simulate sending verification code
      console.log('Sending verification code to', this.registerForm.get('phone')?.value);
      alert('A 6-digit verification code has been sent to ' + this.registerForm.get('phone')?.value);
      this.currentStep = 2;
    }
  }

  onStep2Submit() {
    if (this.verifyForm.valid) {
      // Simulate verification
      console.log('Verifying code:', this.verifyForm.get('code')?.value);
      alert('Account created successfully! Phone number verified.');
      // Navigate or complete signup process here
    }
  }

  changePhone(event: Event) {
    event.preventDefault();
    this.currentStep = 1;
    this.verifyForm.reset();
  }

  resendCode(event: Event) {
    event.preventDefault();
    console.log('Resending code to', this.registerForm.get('phone')?.value);
    alert('A new verification code has been sent to ' + this.registerForm.get('phone')?.value);
  }

  navigateToSignIn() {
    this.router.navigate(['/login']);
  }
}