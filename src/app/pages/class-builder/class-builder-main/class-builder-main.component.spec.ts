import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBuilderMainComponent } from './class-builder-main.component';

describe('ClassBuilderMainComponent', () => {
  let component: ClassBuilderMainComponent;
  let fixture: ComponentFixture<ClassBuilderMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassBuilderMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassBuilderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
