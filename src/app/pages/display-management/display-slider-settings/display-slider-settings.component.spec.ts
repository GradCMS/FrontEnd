import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySliderSettingsComponent } from './display-slider-settings.component';

describe('DisplaySliderSettingsComponent', () => {
  let component: DisplaySliderSettingsComponent;
  let fixture: ComponentFixture<DisplaySliderSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySliderSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySliderSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
