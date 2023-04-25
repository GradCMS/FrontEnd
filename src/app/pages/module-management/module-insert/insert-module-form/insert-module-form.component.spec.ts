import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertModuleFormComponent } from './insert-module-form.component';

describe('InsertModuleFormComponent', () => {
  let component: InsertModuleFormComponent;
  let fixture: ComponentFixture<InsertModuleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertModuleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertModuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
