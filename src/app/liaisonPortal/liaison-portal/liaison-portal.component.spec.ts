import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonPortalComponent } from './liaison-portal.component';

describe('LiaisonPortalComponent', () => {
  let component: LiaisonPortalComponent;
  let fixture: ComponentFixture<LiaisonPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiaisonPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiaisonPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
