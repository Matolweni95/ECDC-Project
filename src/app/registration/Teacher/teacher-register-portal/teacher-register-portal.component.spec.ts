import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRegisterPortalComponent } from './teacher-register-portal.component';

describe('TeacherRegisterPortalComponent', () => {
  let component: TeacherRegisterPortalComponent;
  let fixture: ComponentFixture<TeacherRegisterPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRegisterPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRegisterPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
