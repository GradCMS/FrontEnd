import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModuleMainComponent } from './edit-module-main.component';

describe('EditModuleMainComponent', () => {
  let component: EditModuleMainComponent;
  let fixture: ComponentFixture<EditModuleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditModuleMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModuleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
