import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingApplicationComponent } from './funding-application.component';

describe('FundingApplicationComponent', () => {
  let component: FundingApplicationComponent;
  let fixture: ComponentFixture<FundingApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundingApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
