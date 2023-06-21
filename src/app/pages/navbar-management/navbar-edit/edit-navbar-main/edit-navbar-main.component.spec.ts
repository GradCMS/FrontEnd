import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNavbarMainComponent } from './edit-navbar-main.component';

describe('EditNavbarMainComponent', () => {
  let component: EditNavbarMainComponent;
  let fixture: ComponentFixture<EditNavbarMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNavbarMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNavbarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
