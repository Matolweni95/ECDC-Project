import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationApprovalComponent } from './application-approval.component';

describe('ApplicationApprovalComponent', () => {
  let component: ApplicationApprovalComponent;
  let fixture: ComponentFixture<ApplicationApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
