import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBuilderEditComponent } from './class-builder-edit.component';

describe('ClassBuilderEditComponent', () => {
  let component: ClassBuilderEditComponent;
  let fixture: ComponentFixture<ClassBuilderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassBuilderEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassBuilderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
