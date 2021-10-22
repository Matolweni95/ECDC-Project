import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerChildResultComponent } from './manager-child-result.component';

describe('ManagerChildResultComponent', () => {
  let component: ManagerChildResultComponent;
  let fixture: ComponentFixture<ManagerChildResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerChildResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerChildResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
