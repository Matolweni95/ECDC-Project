import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainChatComponent } from './mountain-chat.component';

describe('MountainChatComponent', () => {
  let component: MountainChatComponent;
  let fixture: ComponentFixture<MountainChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountainChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
