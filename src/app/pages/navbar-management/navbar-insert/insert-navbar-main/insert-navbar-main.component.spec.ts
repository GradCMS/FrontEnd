import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNavbarMainComponent } from './insert-navbar-main.component';

describe('InsertNavbarMainComponent', () => {
  let component: InsertNavbarMainComponent;
  let fixture: ComponentFixture<InsertNavbarMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertNavbarMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertNavbarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
