import { TestBed } from '@angular/core/testing';

import { CanActivateAdminGuard } from './canactivate-admin.guard';

describe('CanФActivateAdminGuard', () => {
  let guard: CanActivateAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
