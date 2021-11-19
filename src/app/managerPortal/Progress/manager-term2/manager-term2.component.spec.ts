import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTerm2Component } from './manager-term2.component';

describe('ManagerTerm2Component', () => {
  let component: ManagerTerm2Component;
  let fixture: ComponentFixture<ManagerTerm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerTerm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTerm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
