import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreFundsComponent } from './centre-funds.component';

describe('CentreFundsComponent', () => {
  let component: CentreFundsComponent;
  let fixture: ComponentFixture<CentreFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreFundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
