import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreApplicationsComponent } from './centre-applications.component';

describe('CentreApplicationsComponent', () => {
  let component: CentreApplicationsComponent;
  let fixture: ComponentFixture<CentreApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
