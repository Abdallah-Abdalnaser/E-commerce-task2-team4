import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with step 1', () => {
    expect(component.currentStep).toBe(1);
  });

  it('should have an invalid register form when empty', () => {
    expect(component.registerForm.valid).toBeFalse();
  });

  it('should validate phone number format', () => {
    const phoneControl = component.registerForm.get('phone');
    phoneControl?.setValue('123'); // Invalid: less than 10 digits
    expect(phoneControl?.valid).toBeFalse();
    phoneControl?.setValue('1234567890'); // Valid: 10 digits
    expect(phoneControl?.valid).toBeTrue();
  });

  it('should move to step 2 when step 1 form is valid', () => {
    component.registerForm.patchValue({
      name: 'John Doe',
      phone: '1234567890',
      password: 'password123'
    });
    component.onStep1Submit();
    expect(component.currentStep).toBe(2);
  });

  it('should stay on step 1 when step 1 form is invalid', () => {
    component.registerForm.patchValue({
      name: '',
      phone: '123',
      password: 'pass'
    });
    component.onStep1Submit();
    expect(component.currentStep).toBe(1);
  });

  it('should validate verification code format', () => {
    const codeControl = component.verifyForm.get('code');
    codeControl?.setValue('12345'); // Invalid: less than 6 digits
    expect(codeControl?.valid).toBeFalse();
    codeControl?.setValue('123456'); // Valid: 6 digits
    expect(codeControl?.valid).toBeTrue();
  });

  it('should navigate to sign-in page', () => {
    const routerSpy = spyOn(component['router'], 'navigate');
    component.navigateToSignIn();
    expect(routerSpy).toHaveBeenCalledWith(['/signin']);
  });
});