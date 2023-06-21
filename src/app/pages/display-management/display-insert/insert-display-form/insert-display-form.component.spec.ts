import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDisplayFormComponent } from './insert-display-form.component';

describe('InsertDisplayFormComponent', () => {
  let component: InsertDisplayFormComponent;
  let fixture: ComponentFixture<InsertDisplayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDisplayFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertDisplayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
