import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDisplayFormComponent } from './edit-display-form.component';

describe('EditDisplayFormComponent', () => {
  let component: EditDisplayFormComponent;
  let fixture: ComponentFixture<EditDisplayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDisplayFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDisplayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
