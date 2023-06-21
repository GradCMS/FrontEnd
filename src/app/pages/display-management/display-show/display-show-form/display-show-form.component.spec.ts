import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShowFormComponent } from './display-show-form.component';

describe('DisplayShowFormComponent', () => {
  let component: DisplayShowFormComponent;
  let fixture: ComponentFixture<DisplayShowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayShowFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayShowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
