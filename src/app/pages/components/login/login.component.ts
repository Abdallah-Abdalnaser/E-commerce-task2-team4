import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailForm: FormGroup;
  passwordForm: FormGroup;
  forgotPasswordForm: FormGroup;
  currentStep = 1;
  showForgotPassword = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^([^\s@]+@[^\s@]+\.[^\s@]+|\d{10})$/)]]
    });

    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.forgotPasswordForm = this.fb.group({
      forgotEmail: ['', [Validators.required, Validators.pattern(/^([^\s@]+@[^\s@]+\.[^\s@]+|\d{10})$/)]]
    });
  }

  onEmailSubmit() {
    if (this.emailForm.valid) {
      this.currentStep = 2;
    }
  }

  onPasswordSubmit() {
    if (this.passwordForm.valid) {
      alert('Sign in successful!');
      // Add backend sign-in logic here
    }
  }

  onForgotPasswordSubmit() {
    if (this.forgotPasswordForm.valid) {
      alert('Password reset instructions sent to ' + this.forgotPasswordForm.get('forgotEmail')?.value);
      this.showForgotPassword = false;
      this.currentStep = 1;
      this.passwordForm.reset();
    }
  }

  changeEmail(event: Event) {
    event.preventDefault();
    this.currentStep = 1;
    this.passwordForm.reset();
  }

  showForgotPasswordForm(event: Event) {
    event.preventDefault();
    this.showForgotPassword = true;
    this.forgotPasswordForm.patchValue({ forgotEmail: this.emailForm.get('email')?.value });
  }

  showHelp(event: Event) {
    event.preventDefault();
    alert('Contact Amazon Support for assistance.');
  }

  navigateToSignup() {
    this.router.navigate(['/register']);
  }
}