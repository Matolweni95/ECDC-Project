import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLiaisonComponent } from './admin-liaison.component';

describe('AdminLiaisonComponent', () => {
  let component: AdminLiaisonComponent;
  let fixture: ComponentFixture<AdminLiaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLiaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLiaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
