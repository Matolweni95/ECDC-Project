import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSectionComponent } from './staff-section.component';

describe('StaffSectionComponent', () => {
  let component: StaffSectionComponent;
  let fixture: ComponentFixture<StaffSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
