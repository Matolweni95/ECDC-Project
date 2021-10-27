import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonHomeComponent } from './liaison-home.component';

describe('LiaisonHomeComponent', () => {
  let component: LiaisonHomeComponent;
  let fixture: ComponentFixture<LiaisonHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiaisonHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiaisonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
