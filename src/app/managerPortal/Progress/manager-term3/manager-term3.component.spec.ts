import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTerm3Component } from './manager-term3.component';

describe('ManagerTerm3Component', () => {
  let component: ManagerTerm3Component;
  let fixture: ComponentFixture<ManagerTerm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerTerm3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTerm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
