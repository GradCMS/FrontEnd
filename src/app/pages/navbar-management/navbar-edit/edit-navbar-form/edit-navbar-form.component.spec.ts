import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNavbarFormComponent } from './edit-navbar-form.component';

describe('EditNavbarFormComponent', () => {
  let component: EditNavbarFormComponent;
  let fixture: ComponentFixture<EditNavbarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNavbarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNavbarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
