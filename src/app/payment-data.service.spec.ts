import { TestBed, inject } from '@angular/core/testing';

import { PaymentDataService } from './payment-data.service';

describe('PaymentDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentDataService]
    });
  });

  it('should be created', inject([PaymentDataService], (service: PaymentDataService) => {
    expect(service).toBeTruthy();
  }));
});
