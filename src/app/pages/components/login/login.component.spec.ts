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
    emailControl?.setValue('invalid'); // Invalid
    expect(emailControl?.valid).toBeFalse();
    emailControl?.setValue('test@example.com'); // Valid email
    expect(emailControl?.valid).toBeTrue();
    emailControl?.setValue('1234567890'); // Valid phone
    expect(emailControl?.valid).toBeTrue();
  });

  it('should move to step 2 when email form is valid', () => {
    component.emailForm.patchValue({ email: 'test@example.com' });
    component.onEmailSubmit();
    expect(component.currentStep).toBe(2);
  });

  it('should stay on step 1 when email form is invalid', () => {
    component.emailForm.patchValue({ email: 'invalid' });
    component.onEmailSubmit();
    expect(component.currentStep).toBe(1);
  });

  it('should validate password length', () => {
    const passwordControl = component.passwordForm.get('password');
    passwordControl?.setValue('12345'); // Invalid: too short
    expect(passwordControl?.valid).toBeFalse();
    passwordControl?.setValue('123456'); // Valid: 6+ characters
    expect(passwordControl?.valid).toBeTrue();
  });

  it('should show forgot password form', () => {
    component.emailForm.patchValue({ email: 'test@example.com' });
    component.currentStep = 2;
    component.showForgotPasswordForm(new Event('click'));
    expect(component.showForgotPassword).toBeTrue();
    expect(component.forgotPasswordForm.get('forgotEmail')?.value).toBe('test@example.com');
  });

  it('should navigate to signup page', () => {
    const routerSpy = spyOn(component['router'], 'navigate');
    component.navigateToSignup();
    expect(routerSpy).toHaveBeenCalledWith(['/register']);
  });
});