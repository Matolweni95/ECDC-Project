import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoordinatorComponent } from './admin-coordinator.component';

describe('AdminCoordinatorComponent', () => {
  let component: AdminCoordinatorComponent;
  let fixture: ComponentFixture<AdminCoordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoordinatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
