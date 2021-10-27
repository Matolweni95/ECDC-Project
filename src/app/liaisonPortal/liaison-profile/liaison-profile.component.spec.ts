import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonProfileComponent } from './liaison-profile.component';

describe('LiaisonProfileComponent', () => {
  let component: LiaisonProfileComponent;
  let fixture: ComponentFixture<LiaisonProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiaisonProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiaisonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
