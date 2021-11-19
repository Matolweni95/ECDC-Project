import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Term2Component } from './term2.component';

describe('Term2Component', () => {
  let component: Term2Component;
  let fixture: ComponentFixture<Term2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Term2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Term2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
