import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShowMainComponent } from './display-show-main.component';

describe('DisplayShowMainComponent', () => {
  let component: DisplayShowMainComponent;
  let fixture: ComponentFixture<DisplayShowMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayShowMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayShowMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
