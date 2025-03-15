// login.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, LoginComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with step 1', () => {
    expect(component.currentStep).toBe(1);
    expect(component.showForgotPassword).toBeFalse();
  });

  it('should have an invalid email form when empty', () => {
    expect(component.emailForm.valid).toBeFalse();
  });

  it('should validate email or phone format', () => {
    const emailControl = component.emailForm.get('email');
    emailControl?.setValue('invalid');
    expect(emailControl?.valid).toBeFalse();
    emailControl?.setValue('test@example.com');
    expect(emailControl?.valid).toBeTrue();
    emailControl?.setValue('1234567890');
    expect(emailControl?.valid).toBeTrue();
  });

  it('should move to step 2 when phone matches registered user', () => {
    localStorage.setItem('registeredUser', JSON.stringify({
      phone: '1234567890',
      password: 'password123'
    }));
    component.emailForm.patchValue({ email: '1234567890' });
    component.onEmailSubmit();
    expect(component.currentStep).toBe(2);
    expect(component.loginError).toBeNull();
  });

  it('should show error when phone doesn\'t match', () => {
    localStorage.setItem('registeredUser', JSON.stringify({
      phone: '1234567890',
      password: 'password123'
    }));
    component.emailForm.patchValue({ email: '0987654321' });
    component.onEmailSubmit();
    expect(component.currentStep).toBe(1);
    expect(component.loginError).toBe('No account found with this phone number');
  });

  it('should validate password length', () => {
    const passwordControl = component.passwordForm.get('password');
    passwordControl?.setValue('12345');
    expect(passwordControl?.valid).toBeFalse();
    passwordControl?.setValue('123456');
    expect(passwordControl?.valid).toBeTrue();
  });

  it('should login successfully with correct credentials', () => {
    localStorage.setItem('registeredUser', JSON.stringify({
      phone: '1234567890',
      password: 'password123'
    }));
    component.emailForm.patchValue({ email: '1234567890' });
    component.onEmailSubmit();
    component.passwordForm.patchValue({ password: 'password123' });
    const routerSpy = spyOn(component['router'], 'navigate');
    component.onPasswordSubmit();
    expect(component.loginError).toBeNull();
    expect(routerSpy).toHaveBeenCalledWith(['/home']);
  });

  it('should show error with incorrect password', () => {
    localStorage.setItem('registeredUser', JSON.stringify({
      phone: '1234567890',
      password: 'password123'
    }));
    component.emailForm.patchValue({ email: '1234567890' });
    component.onEmailSubmit();
    component.passwordForm.patchValue({ password: 'wrongpass' });
    component.onPasswordSubmit();
    expect(component.loginError).toBe('Incorrect password');
  });

  it('should handle forgot password for registered user', () => {
    localStorage.setItem('registeredUser', JSON.stringify({
      phone: '1234567890',
      password: 'password123'
    }));
    component.forgotPasswordForm.patchValue({ forgotEmail: '1234567890' });
    component.onForgotPasswordSubmit();
    expect(component.showForgotPassword).toBeFalse();
    expect(component.currentStep).toBe(1);
    expect(component.loginError).toBeNull();
  });

  it('should navigate to signup page', () => {
    const routerSpy = spyOn(component['router'], 'navigate');
    component.navigateToSignup();
    expect(routerSpy).toHaveBeenCalledWith(['/register']);
  });
});