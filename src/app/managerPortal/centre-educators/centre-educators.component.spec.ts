import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreEducatorsComponent } from './centre-educators.component';

describe('CentreEducatorsComponent', () => {
  let component: CentreEducatorsComponent;
  let fixture: ComponentFixture<CentreEducatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreEducatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreEducatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
