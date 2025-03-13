import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsfilterationComponent } from './productsfilteration.component';

describe('ProductsfilterationComponent', () => {
  let component: ProductsfilterationComponent;
  let fixture: ComponentFixture<ProductsfilterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsfilterationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsfilterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
