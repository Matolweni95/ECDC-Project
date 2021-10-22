import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalManagerProfileComponent } from './regional-manager-profile.component';

describe('RegionalManagerProfileComponent', () => {
  let component: RegionalManagerProfileComponent;
  let fixture: ComponentFixture<RegionalManagerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalManagerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalManagerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
