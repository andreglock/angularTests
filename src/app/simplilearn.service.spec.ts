import { TestBed } from '@angular/core/testing';

import { SimplilearnService } from './simplilearn.service';

describe('GapMccService', () => {
  let service: SimplilearnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimplilearnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
