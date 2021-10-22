import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumSectionComponent } from './curriculum-section.component';

describe('CurriculumSectionComponent', () => {
  let component: CurriculumSectionComponent;
  let fixture: ComponentFixture<CurriculumSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
