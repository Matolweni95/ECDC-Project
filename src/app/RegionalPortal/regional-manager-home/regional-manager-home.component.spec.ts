import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalManagerHomeComponent } from './regional-manager-home.component';

describe('RegionalManagerHomeComponent', () => {
  let component: RegionalManagerHomeComponent;
  let fixture: ComponentFixture<RegionalManagerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalManagerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalManagerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
