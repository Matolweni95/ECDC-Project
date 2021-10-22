import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCentreFeesComponent } from './manager-centre-fees.component';

describe('ManagerCentreFeesComponent', () => {
  let component: ManagerCentreFeesComponent;
  let fixture: ComponentFixture<ManagerCentreFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerCentreFeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerCentreFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
