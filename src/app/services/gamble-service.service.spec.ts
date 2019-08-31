import { TestBed } from '@angular/core/testing';

import { GambleServiceService } from './gamble-service.service';

describe('GambleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GambleServiceService = TestBed.get(GambleServiceService);
    expect(service).toBeTruthy();
  });
});
