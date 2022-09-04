import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddHouseComponent } from './user-add-house.component';

describe('UserAddHouseComponent', () => {
  let component: UserAddHouseComponent;
  let fixture: ComponentFixture<UserAddHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
