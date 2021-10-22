import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreGeneralStaffComponent } from './centre-general-staff.component';

describe('CentreGeneralStaffComponent', () => {
  let component: CentreGeneralStaffComponent;
  let fixture: ComponentFixture<CentreGeneralStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreGeneralStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreGeneralStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
