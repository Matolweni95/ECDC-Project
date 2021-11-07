import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFeeEditComponent } from './manager-fee-edit.component';

describe('ManagerFeeEditComponent', () => {
  let component: ManagerFeeEditComponent;
  let fixture: ComponentFixture<ManagerFeeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerFeeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerFeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
