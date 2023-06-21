import { TestBed } from '@angular/core/testing';

import { ClassbuilderService } from './classbuilder.service';

describe('ClassbuilderService', () => {
  let service: ClassbuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassbuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
