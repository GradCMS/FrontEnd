import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDisplayFormComponent } from './navbar-display-form.component';

describe('NavbarDisplayFormComponent', () => {
  let component: NavbarDisplayFormComponent;
  let fixture: ComponentFixture<NavbarDisplayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDisplayFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDisplayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
