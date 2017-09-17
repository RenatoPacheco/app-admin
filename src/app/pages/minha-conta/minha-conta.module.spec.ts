import { MinhaContaModule } from './minha-conta.module';

describe('MinhaContaModule', () => {
  let minhaContaModule: MinhaContaModule;

  beforeEach(() => {
    minhaContaModule = new MinhaContaModule();
  });

  it('should create an instance', () => {
    expect(minhaContaModule).toBeTruthy();
  });
});
