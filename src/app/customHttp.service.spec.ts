import { TestBed } from '@angular/core/testing';

import { CustomHttpService } from './customHttp.service';

describe('HttpService', () => {
  let service: CustomHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
