import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProdComponent } from './new-prod.component';

describe('NewProdComponent', () => {
  let component: NewProdComponent;
  let fixture: ComponentFixture<NewProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
