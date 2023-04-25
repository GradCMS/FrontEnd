import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleDisplayComponent } from './module-display.component';

describe('ModuleDisplayComponent', () => {
  let component: ModuleDisplayComponent;
  let fixture: ComponentFixture<ModuleDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
