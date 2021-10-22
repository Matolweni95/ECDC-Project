import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTemplateEditableComponent } from './teacher-template-editable.component';

describe('TeacherTemplateEditableComponent', () => {
  let component: TeacherTemplateEditableComponent;
  let fixture: ComponentFixture<TeacherTemplateEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherTemplateEditableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTemplateEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
