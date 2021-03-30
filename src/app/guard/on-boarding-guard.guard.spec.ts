import { TestBed } from '@angular/core/testing';

import { OnBoardingGuardGuard } from './on-boarding-guard.guard';

describe('OnBoardingGuardGuard', () => {
  let guard: OnBoardingGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnBoardingGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
