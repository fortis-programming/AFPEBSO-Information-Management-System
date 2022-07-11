import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliberationPageComponent } from './deliberation-page.component';

describe('DeliberationPageComponent', () => {
  let component: DeliberationPageComponent;
  let fixture: ComponentFixture<DeliberationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliberationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliberationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
