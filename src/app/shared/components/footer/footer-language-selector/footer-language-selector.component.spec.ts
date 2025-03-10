import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLanguageSelectorComponent } from './footer-language-selector.component';

describe('FooterLanguageSelectorComponent', () => {
  let component: FooterLanguageSelectorComponent;
  let fixture: ComponentFixture<FooterLanguageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterLanguageSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
