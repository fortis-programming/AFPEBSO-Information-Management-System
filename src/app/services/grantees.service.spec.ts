import { TestBed } from '@angular/core/testing';

import { GranteesService } from './grantees.service';

describe('GranteesService', () => {
  let service: GranteesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GranteesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
