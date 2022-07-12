import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatesItemComponent } from './graduates-item.component';

describe('GraduatesItemComponent', () => {
  let component: GraduatesItemComponent;
  let fixture: ComponentFixture<GraduatesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduatesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduatesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
