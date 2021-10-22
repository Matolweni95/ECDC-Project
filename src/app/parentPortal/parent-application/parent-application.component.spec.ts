import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentApplicationComponent } from './parent-application.component';

describe('ParentApplicationComponent', () => {
  let component: ParentApplicationComponent;
  let fixture: ComponentFixture<ParentApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
