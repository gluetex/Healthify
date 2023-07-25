import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StepcounterPage } from './stepcounter.page';

describe('StepcounterPage', () => {
  let component: StepcounterPage;
  let fixture: ComponentFixture<StepcounterPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(StepcounterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
