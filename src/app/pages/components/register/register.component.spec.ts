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
    // Clear localStorage before each test
    localStorage.clear();
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
    phoneControl?.setValue('123');
    expect(phoneControl?.valid).toBeFalse();
    phoneControl?.setValue('1234567890');
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
    codeControl?.setValue('12345');
    expect(codeControl?.valid).toBeFalse();
    codeControl?.setValue('123456');
    expect(codeControl?.valid).toBeTrue();
  });

  it('should navigate to sign-in page', () => {
    const routerSpy = spyOn(component['router'], 'navigate');
    component.navigateToSignIn();
    expect(routerSpy).toHaveBeenCalledWith(['/login']);
  });

  it('should store user data in localStorage on successful verification', () => {
    component.registerForm.patchValue({
      name: 'John Doe',
      phone: '1234567890',
      password: 'password123'
    });
    component.onStep1Submit();
    
    component.verifyForm.patchValue({
      code: '123456'
    });
    const routerSpy = spyOn(component['router'], 'navigate');
    component.onStep2Submit();
    
    const storedUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');
    expect(storedUser.name).toBe('John Doe');
    expect(storedUser.phone).toBe('1234567890');
    expect(storedUser.verified).toBeTrue();
    expect(routerSpy).toHaveBeenCalledWith(['/login']);
  });

  it('should check if user already exists', () => {
    const userData = {
      name: 'John Doe',
      phone: '1234567890',
      password: 'password123',
      verified: true,
      registrationDate: new Date().toISOString()
    };
    localStorage.setItem('registeredUser', JSON.stringify(userData));
    
    component.registerForm.patchValue({
      phone: '1234567890'
    });
    expect(component.checkExistingUser()).toBeTrue();
    
    component.registerForm.patchValue({
      phone: '0987654321'
    });
    expect(component.checkExistingUser()).toBeFalse();
  });
});