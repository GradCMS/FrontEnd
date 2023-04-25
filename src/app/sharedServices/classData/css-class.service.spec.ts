import { TestBed } from '@angular/core/testing';

import { CssClassService } from './css-class.service';

describe('CssClassService', () => {
  let service: CssClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
