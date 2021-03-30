import { TestBed } from '@angular/core/testing';

import { HireserviceService } from './hireservice.service';

describe('HireserviceService', () => {
  let service: HireserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HireserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
