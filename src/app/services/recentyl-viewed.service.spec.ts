import { TestBed } from '@angular/core/testing';

import { RecentylViewedService } from './recentyl-viewed.service';

describe('RecentylViewedService', () => {
  let service: RecentylViewedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentylViewedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
