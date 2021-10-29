import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRegisterPortalComponent } from './parent-register-portal.component';

describe('ParentRegisterPortalComponent', () => {
  let component: ParentRegisterPortalComponent;
  let fixture: ComponentFixture<ParentRegisterPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentRegisterPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentRegisterPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
