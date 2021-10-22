import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalManagerPortalComponent } from './regional-manager-portal.component';

describe('RegionalManagerPortalComponent', () => {
  let component: RegionalManagerPortalComponent;
  let fixture: ComponentFixture<RegionalManagerPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalManagerPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalManagerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
