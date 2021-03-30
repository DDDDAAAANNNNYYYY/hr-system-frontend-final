import { TestBed } from '@angular/core/testing';

import { FacilityReportServiceService } from './facility-report-service.service';

describe('FacilityReportServiceService', () => {
  let service: FacilityReportServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilityReportServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
