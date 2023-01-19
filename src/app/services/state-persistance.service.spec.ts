import { TestBed } from '@angular/core/testing';

import { StatePersistanceService } from './state-persistance.service';

describe('StatePersistanceService', () => {
  let service: StatePersistanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatePersistanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
