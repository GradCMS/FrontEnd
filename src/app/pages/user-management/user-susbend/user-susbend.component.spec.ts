import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSusbendComponent } from './user-susbend.component';

describe('UserSusbendComponent', () => {
  let component: UserSusbendComponent;
  let fixture: ComponentFixture<UserSusbendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSusbendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSusbendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
