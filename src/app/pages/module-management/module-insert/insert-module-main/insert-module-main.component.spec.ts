import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertModuleMainComponent } from './insert-module-main.component';

describe('InsertModuleMainComponent', () => {
  let component: InsertModuleMainComponent;
  let fixture: ComponentFixture<InsertModuleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertModuleMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertModuleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
