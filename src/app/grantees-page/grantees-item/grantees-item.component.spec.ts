import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranteesItemComponent } from './grantees-item.component';

describe('GranteesItemComponent', () => {
  let component: GranteesItemComponent;
  let fixture: ComponentFixture<GranteesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranteesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GranteesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
