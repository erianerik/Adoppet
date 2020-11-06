import { TestBed } from '@angular/core/testing';

import { AdopetServiceService } from './adopet-service.service';

describe('AdopetServiceService', () => {
  let service: AdopetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdopetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
