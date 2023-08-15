import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AvatarPage } from './avatar.page';

describe('AvatarPage', () => {
  let component: AvatarPage;
  let fixture: ComponentFixture<AvatarPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(AvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
