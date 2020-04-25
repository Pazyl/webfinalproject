import { TestBed } from '@angular/core/testing';

import { AddListService } from './add-list.service';

describe('AddListService', () => {
  let service: AddListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
