import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Term1Component } from './term1.component';

describe('Term1Component', () => {
  let component: Term1Component;
  let fixture: ComponentFixture<Term1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Term1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Term1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
