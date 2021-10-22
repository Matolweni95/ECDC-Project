import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychildrenComponent } from './mychildren.component';

describe('MychildrenComponent', () => {
  let component: MychildrenComponent;
  let fixture: ComponentFixture<MychildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MychildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MychildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
