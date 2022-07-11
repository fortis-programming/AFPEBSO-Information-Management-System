import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantRouteComponent } from './applicant-route.component';

describe('ApplicantRouteComponent', () => {
  let component: ApplicantRouteComponent;
  let fixture: ComponentFixture<ApplicantRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
