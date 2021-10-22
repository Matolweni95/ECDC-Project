import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTaskComponent } from './teacher-task.component';

describe('TeacherTaskComponent', () => {
  let component: TeacherTaskComponent;
  let fixture: ComponentFixture<TeacherTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
