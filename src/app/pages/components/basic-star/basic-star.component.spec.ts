import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStarComponent } from './basic-star.component';

describe('BasicStarComponent', () => {
  let component: BasicStarComponent;
  let fixture: ComponentFixture<BasicStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicStarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
