import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPortalComponent } from './manager-portal.component';

describe('ManagerPortalComponent', () => {
  let component: ManagerPortalComponent;
  let fixture: ComponentFixture<ManagerPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
