import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTerm4Component } from './manager-term4.component';

describe('ManagerTerm4Component', () => {
  let component: ManagerTerm4Component;
  let fixture: ComponentFixture<ManagerTerm4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerTerm4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTerm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
