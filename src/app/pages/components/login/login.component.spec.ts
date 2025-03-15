import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { RouterTestingModule } from "@angular/router/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { ComponentFixture, TestBed } from "@angular/core/testing";

// login.component.spec.ts
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, LoginComponent,CommonModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.clear(); 
  });

  // ... existing tests ...

  it('should reject login with non-existent user', () => {
    component.emailForm.patchValue({ email: '1234567890' });
    component.onEmailSubmit();
    expect(component.currentStep).toBe(1); // Should not move to step 2
  });

  it('should allow login with registered user', () => {
    // Register a test user
    const testUser = { phone: '1234567890', password: 'password123', name: 'Test User' };
    localStorage.setItem('users', JSON.stringify([testUser]));
    
    component.emailForm.patchValue({ email: '1234567890' });
    component.onEmailSubmit();
    expect(component.currentStep).toBe(2);
    
    component.passwordForm.patchValue({ password: 'password123' });
    const routerSpy = spyOn(component['router'], 'navigate');
    component.onPasswordSubmit();
    expect(routerSpy).toHaveBeenCalledWith(['/home']);
  });

  it('should reject incorrect password', () => {
    const testUser = { phone: '1234567890', password: 'password123', name: 'Test User' };
    localStorage.setItem('users', JSON.stringify([testUser]));
    
    component.emailForm.patchValue({ email: '1234567890' });
    component.onEmailSubmit();
    component.passwordForm.patchValue({ password: 'wrongpassword' });
    component.onPasswordSubmit();
    expect(component.currentStep).toBe(2); // Stays on password step
  });
});