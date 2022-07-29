import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliberationItemComponent } from './deliberation-item.component';

describe('DeliberationItemComponent', () => {
  let component: DeliberationItemComponent;
  let fixture: ComponentFixture<DeliberationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliberationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliberationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
