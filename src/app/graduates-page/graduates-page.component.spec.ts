import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatesPageComponent } from './graduates-page.component';

describe('GraduatesPageComponent', () => {
  let component: GraduatesPageComponent;
  let fixture: ComponentFixture<GraduatesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduatesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
