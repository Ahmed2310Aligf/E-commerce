import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductParentsComponent } from './product-parents.component';

describe('ProductParentsComponent', () => {
  let component: ProductParentsComponent;
  let fixture: ComponentFixture<ProductParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductParentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
