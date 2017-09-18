import { TestBed, async, inject } from '@angular/core/testing';

import { IndexResolver } from './index.resolver';

describe('DetalheGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexResolver]
    });
  });

  it('should ...', inject([IndexResolver], (guard: IndexResolver) => {
    expect(guard).toBeTruthy();
  }));
});
