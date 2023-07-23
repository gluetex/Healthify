import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TaskRoutePage } from './task-route.page';

describe('TaskRoutePage', () => {
  let component: TaskRoutePage;
  let fixture: ComponentFixture<TaskRoutePage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(TaskRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
