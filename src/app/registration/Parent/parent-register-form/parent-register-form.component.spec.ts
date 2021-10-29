import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRegisterFormComponent } from './parent-register-form.component';

describe('ParentRegisterFormComponent', () => {
  let component: ParentRegisterFormComponent;
  let fixture: ComponentFixture<ParentRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
