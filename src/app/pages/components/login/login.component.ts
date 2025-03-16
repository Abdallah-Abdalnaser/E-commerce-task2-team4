// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailForm: FormGroup;
  passwordForm: FormGroup;
  forgotPasswordForm: FormGroup;
  currentStep = 1;
  showForgotPassword = false;
  loginError: string | null = null;

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
      const registeredUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');
      const input = this.emailForm.get('email')?.value;

      if (registeredUser.phone === input) {
        this.currentStep = 2;
        this.loginError = null;
      } else {
        this.loginError = 'No account found with this phone number';
      }
    }
  }

  onPasswordSubmit() {
    if (this.passwordForm.valid) {
      const registeredUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');
      const inputPassword = this.passwordForm.get('password')?.value;

      if (registeredUser.password === inputPassword) {
        alert('Sign in successful!');
        this.router.navigate(['/home']);
        this.loginError = null;
      } else {
        this.loginError = 'Incorrect password';
      }
    }
  }

  onForgotPasswordSubmit() {
    if (this.forgotPasswordForm.valid) {
      const registeredUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');
      const forgotEmail = this.forgotPasswordForm.get('forgotEmail')?.value;

      if (registeredUser.phone === forgotEmail) {
        alert('Password reset instructions sent to ' + forgotEmail);
        this.showForgotPassword = false;
        this.currentStep = 1;
        this.passwordForm.reset();
        this.loginError = null;
      } else {
        this.loginError = 'No account found with this phone number';
      }
    }
  }

  changeEmail(event: Event) {
    event.preventDefault();
    this.currentStep = 1;
    this.passwordForm.reset();
    this.loginError = null;
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
    this.router.navigate(['/Register']); // Changed to lowercase to match Angular routing convention
  }
}
