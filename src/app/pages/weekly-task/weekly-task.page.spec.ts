import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeeklyTaskPage } from './weekly-task.page';

describe('WeeklyTaskPage', () => {
  let component: WeeklyTaskPage;
  let fixture: ComponentFixture<WeeklyTaskPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeeklyTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
