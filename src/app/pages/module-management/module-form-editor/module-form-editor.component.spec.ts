import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFormEditorComponent } from './module-form-editor.component';

describe('ModuleFormEditorComponent', () => {
  let component: ModuleFormEditorComponent;
  let fixture: ComponentFixture<ModuleFormEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFormEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFormEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
