import { TestBed } from '@angular/core/testing';

import { HttpInterCepterService } from './http-inter-cepter.service';

describe('HttpInterCepterService', () => {
  let service: HttpInterCepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterCepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
