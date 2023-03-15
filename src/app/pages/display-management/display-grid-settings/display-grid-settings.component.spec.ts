import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGridSettingsComponent } from './display-grid-settings.component';

describe('DisplayGridSettingsComponent', () => {
  let component: DisplayGridSettingsComponent;
  let fixture: ComponentFixture<DisplayGridSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayGridSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayGridSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
