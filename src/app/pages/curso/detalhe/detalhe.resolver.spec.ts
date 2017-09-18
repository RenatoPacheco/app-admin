import { TestBed, async, inject } from '@angular/core/testing';

import { DetalheResolver } from './detalhe.resolver';

describe('DetalheGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalheResolver]
    });
  });

  it('should ...', inject([DetalheResolver], (guard: DetalheResolver) => {
    expect(guard).toBeTruthy();
  }));
});
