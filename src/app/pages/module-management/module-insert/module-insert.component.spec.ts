import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleInsertComponent } from './module-insert.component';

describe('ModuleInsertComponent', () => {
  let component: ModuleInsertComponent;
  let fixture: ComponentFixture<ModuleInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
