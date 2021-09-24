import { TestBed } from '@angular/core/testing';

import { DbHandlerService } from './db-handler.service';

describe('DataHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbHandlerService = TestBed.get(DbHandlerService);
    expect(service).toBeTruthy();
  });
});
