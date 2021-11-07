import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildViewerComponent } from './child-viewer.component';

describe('ChildViewerComponent', () => {
  let component: ChildViewerComponent;
  let fixture: ComponentFixture<ChildViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
