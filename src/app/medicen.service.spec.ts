import { TestBed } from '@angular/core/testing';

import { MedicenService } from './medicen.service';

describe('MedicenService', () => {
  let service: MedicenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
