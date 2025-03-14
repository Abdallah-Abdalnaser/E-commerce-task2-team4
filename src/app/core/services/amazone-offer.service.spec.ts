import { TestBed } from '@angular/core/testing';

import { AmazoneOfferService } from './amazone-offer.service';

describe('AmazoneOfferService', () => {
  let service: AmazoneOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazoneOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
