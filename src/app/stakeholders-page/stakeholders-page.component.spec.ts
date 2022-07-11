import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholdersPageComponent } from './stakeholders-page.component';

describe('StakeholdersPageComponent', () => {
  let component: StakeholdersPageComponent;
  let fixture: ComponentFixture<StakeholdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeholdersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
