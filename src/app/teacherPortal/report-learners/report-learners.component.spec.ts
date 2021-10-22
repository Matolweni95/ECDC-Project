import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportLearnersComponent } from './report-learners.component';

describe('ReportLearnersComponent', () => {
  let component: ReportLearnersComponent;
  let fixture: ComponentFixture<ReportLearnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportLearnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportLearnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
