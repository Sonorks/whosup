import { TestBed, inject } from '@angular/core/testing';

import { CompleteRegisterService } from './complete-register.service';

describe('CompleteRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompleteRegisterService]
    });
  });

  it('should be created', inject([CompleteRegisterService], (service: CompleteRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
