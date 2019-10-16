import { TestBed } from '@angular/core/testing';

import { CustomprofileService } from './customprofile.service';

describe('CustomprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomprofileService = TestBed.get(CustomprofileService);
    expect(service).toBeTruthy();
  });
});
