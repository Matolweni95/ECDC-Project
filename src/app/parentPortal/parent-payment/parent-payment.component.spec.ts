import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPaymentComponent } from './parent-payment.component';

describe('ParentPaymentComponent', () => {
  let component: ParentPaymentComponent;
  let fixture: ComponentFixture<ParentPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
