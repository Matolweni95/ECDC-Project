import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAssignComponent } from './manager-assign.component';

describe('ManagerAssignComponent', () => {
  let component: ManagerAssignComponent;
  let fixture: ComponentFixture<ManagerAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
