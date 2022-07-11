import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantItemComponent } from './applicant-item.component';

describe('ApplicantItemComponent', () => {
  let component: ApplicantItemComponent;
  let fixture: ComponentFixture<ApplicantItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
