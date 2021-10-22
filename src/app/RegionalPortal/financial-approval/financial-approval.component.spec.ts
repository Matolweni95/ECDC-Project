import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialApprovalComponent } from './financial-approval.component';

describe('FinancialApprovalComponent', () => {
  let component: FinancialApprovalComponent;
  let fixture: ComponentFixture<FinancialApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
