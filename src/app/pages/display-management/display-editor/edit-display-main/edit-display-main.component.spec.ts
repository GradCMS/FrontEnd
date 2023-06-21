import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDisplayMainComponent } from './edit-display-main.component';

describe('EditDisplayMainComponent', () => {
  let component: EditDisplayMainComponent;
  let fixture: ComponentFixture<EditDisplayMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDisplayMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDisplayMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
