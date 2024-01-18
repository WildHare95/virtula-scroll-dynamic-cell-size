import { TestBed } from '@angular/core/testing';

import { WeeklyChangesService } from './weekly-changes.service';

describe('WeeklyChangesService', () => {
  let service: WeeklyChangesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyChangesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
