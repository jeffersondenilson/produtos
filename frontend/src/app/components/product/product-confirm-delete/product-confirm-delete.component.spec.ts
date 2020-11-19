import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductConfirmDeleteComponent } from './product-confirm-delete.component';

describe('ProductConfirmDeleteComponent', () => {
  let component: ProductConfirmDeleteComponent;
  let fixture: ComponentFixture<ProductConfirmDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductConfirmDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductConfirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
