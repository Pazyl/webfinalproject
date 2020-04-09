import { TestBed } from '@angular/core/testing';

import { ControlDbService } from './control-db.service';

describe('ControlDbService', () => {
  let service: ControlDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
