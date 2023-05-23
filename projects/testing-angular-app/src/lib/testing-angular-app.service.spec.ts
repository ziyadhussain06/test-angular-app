import { TestBed } from '@angular/core/testing';

import { TestingAngularAppService } from './testing-angular-app.service';

describe('TestingAngularAppService', () => {
  let service: TestingAngularAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingAngularAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
