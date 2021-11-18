import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychildProfileComponent } from './mychild-profile.component';

describe('MychildProfileComponent', () => {
  let component: MychildProfileComponent;
  let fixture: ComponentFixture<MychildProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MychildProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MychildProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
