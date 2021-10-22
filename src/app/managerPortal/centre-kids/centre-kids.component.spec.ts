import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreKidsComponent } from './centre-kids.component';

describe('CentreKidsComponent', () => {
  let component: CentreKidsComponent;
  let fixture: ComponentFixture<CentreKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreKidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
