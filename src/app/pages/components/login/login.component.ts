// login.component.ts
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
      // Check if user exists
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = users.some((user: any) => user.phone === this.emailForm.get('email')?.value);
      if (!userExists) {
        alert('No account found with this phone number!');
        return;
      }
      this.currentStep = 2;
    }
  }

  onPasswordSubmit() {
    if (this.passwordForm.valid) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const emailOrPhone = this.emailForm.get('email')?.value;
      const password = this.passwordForm.get('password')?.value;
      
      const user = users.find((u: any) => u.phone === emailOrPhone && u.password === password);
      
      if (user) {
        alert('Sign in successful!');
        // Store logged-in user info
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/home']); // Redirect to home page or dashboard
      } else {
        alert('Incorrect password!');
      }
    }
  }

  onForgotPasswordSubmit() {
    if (this.forgotPasswordForm.valid) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const emailOrPhone = this.forgotPasswordForm.get('forgotEmail')?.value;
      
      const userExists = users.some((user: any) => user.phone === emailOrPhone);
      if (!userExists) {
        alert('No account found with this phone number!');
        return;
      }
      
      alert('Password reset instructions sent to ' + emailOrPhone);
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
    this.router.navigate(['/Register']);
  }
}