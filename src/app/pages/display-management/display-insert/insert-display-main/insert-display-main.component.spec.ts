import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDisplayMainComponent } from './insert-display-main.component';

describe('InsertDisplayMainComponent', () => {
  let component: InsertDisplayMainComponent;
  let fixture: ComponentFixture<InsertDisplayMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDisplayMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertDisplayMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
