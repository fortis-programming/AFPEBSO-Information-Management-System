import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialMessageComponentComponent } from './initial-message-component.component';

describe('InitialMessageComponentComponent', () => {
  let component: InitialMessageComponentComponent;
  let fixture: ComponentFixture<InitialMessageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialMessageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
