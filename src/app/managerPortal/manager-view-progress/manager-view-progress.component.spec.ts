import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewProgressComponent } from './manager-view-progress.component';

describe('ManagerViewProgressComponent', () => {
  let component: ManagerViewProgressComponent;
  let fixture: ComponentFixture<ManagerViewProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerViewProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerViewProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
