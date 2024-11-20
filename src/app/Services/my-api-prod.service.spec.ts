import { TestBed } from '@angular/core/testing';

import { MyApiProdService } from './my-api-prod.service';

describe('MyApiProdService', () => {
  let service: MyApiProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyApiProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
