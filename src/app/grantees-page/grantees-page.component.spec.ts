import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranteesPageComponent } from './grantees-page.component';

describe('GranteesPageComponent', () => {
  let component: GranteesPageComponent;
  let fixture: ComponentFixture<GranteesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranteesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GranteesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
