import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFeesViewerComponent } from './manager-fees-viewer.component';

describe('ManagerFeesViewerComponent', () => {
  let component: ManagerFeesViewerComponent;
  let fixture: ComponentFixture<ManagerFeesViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerFeesViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerFeesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
