import { TestBed } from '@angular/core/testing';

import { MeuServiceService } from './meu-service.service';

describe('MeuServiceService', () => {
  let service: MeuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
