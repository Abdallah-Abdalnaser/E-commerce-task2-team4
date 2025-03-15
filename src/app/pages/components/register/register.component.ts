// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
      this.currentStep = 2;
    }
  }

  onStep2Submit() {
    if (this.verifyForm.valid) {
      // Store user data in localStorage
      const userData = {
        phone: this.registerForm.get('phone')?.value,
        password: this.registerForm.get('password')?.value,
        name: this.registerForm.get('name')?.value
      };
      
      // Get existing users or initialize empty array
      let users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if user already exists
      const userExists = users.some((user: any) => user.phone === userData.phone);
      if (userExists) {
        alert('User with this phone number already exists!');
        return;
      }

      // Add new user and save to localStorage
      users.push(userData);
      localStorage.setItem('users', JSON.stringify(users));
      
      alert('Registration successful!');
      this.router.navigate(['/login']);
    }
  }

  changePhone(event: Event) {
    event.preventDefault();
    this.currentStep = 1;
    this.verifyForm.reset();
  }

  resendCode(event: Event) {
    event.preventDefault();
    alert('Verification code resent to ' + this.registerForm.get('phone')?.value);
  }

  navigateToSignIn() {
    this.router.navigate(['/Login']);
  }
}