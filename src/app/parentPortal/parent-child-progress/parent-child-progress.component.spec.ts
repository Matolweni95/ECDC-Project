import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildProgressComponent } from './parent-child-progress.component';

describe('ParentChildProgressComponent', () => {
  let component: ParentChildProgressComponent;
  let fixture: ComponentFixture<ParentChildProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
