import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTerm1Component } from './manager-term1.component';

describe('ManagerTerm1Component', () => {
  let component: ManagerTerm1Component;
  let fixture: ComponentFixture<ManagerTerm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerTerm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTerm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
