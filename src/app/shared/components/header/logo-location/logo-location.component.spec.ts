import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoLocationComponent } from './logo-location.component';

describe('LogoLocationComponent', () => {
  let component: LogoLocationComponent;
  let fixture: ComponentFixture<LogoLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
