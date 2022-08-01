import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementItemComponent } from './user-management-item.component';

describe('UserManagementItemComponent', () => {
  let component: UserManagementItemComponent;
  let fixture: ComponentFixture<UserManagementItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
