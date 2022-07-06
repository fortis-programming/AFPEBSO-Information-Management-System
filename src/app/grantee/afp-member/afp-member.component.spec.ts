import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfpMemberComponent } from './afp-member.component';

describe('AfpMemberComponent', () => {
  let component: AfpMemberComponent;
  let fixture: ComponentFixture<AfpMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfpMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfpMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
