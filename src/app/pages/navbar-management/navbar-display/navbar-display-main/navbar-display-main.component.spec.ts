import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDisplayMainComponent } from './navbar-display-main.component';

describe('NavbarDisplayMainComponent', () => {
  let component: NavbarDisplayMainComponent;
  let fixture: ComponentFixture<NavbarDisplayMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDisplayMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDisplayMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
