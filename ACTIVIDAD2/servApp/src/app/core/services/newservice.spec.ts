import { TestBed } from '@angular/core/testing';

import { Newservice } from './newservice';

describe('Newservice', () => {
  let service: Newservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Newservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
