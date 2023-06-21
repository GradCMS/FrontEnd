import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNavbarFormComponent } from './insert-navbar-form.component';

describe('InsertNavbarFormComponent', () => {
  let component: InsertNavbarFormComponent;
  let fixture: ComponentFixture<InsertNavbarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertNavbarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertNavbarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
