import { TestBed } from '@angular/core/testing';

import { GambleService } from './gamble.service';

describe('GambleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GambleService = TestBed.get(GambleService);
    expect(service).toBeTruthy();
  });
});
