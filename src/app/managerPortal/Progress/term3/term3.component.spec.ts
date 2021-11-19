import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Term3Component } from './term3.component';

describe('Term3Component', () => {
  let component: Term3Component;
  let fixture: ComponentFixture<Term3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Term3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Term3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
