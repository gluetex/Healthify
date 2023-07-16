import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthlyTaskPage } from './monthly-task.page';

describe('MonthlyTaskPage', () => {
  let component: MonthlyTaskPage;
  let fixture: ComponentFixture<MonthlyTaskPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonthlyTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
