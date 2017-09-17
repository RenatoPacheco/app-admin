import { ErroModule } from './erro.module';

describe('ErroModule', () => {
  let erroModule: ErroModule;

  beforeEach(() => {
    erroModule = new ErroModule();
  });

  it('should create an instance', () => {
    expect(erroModule).toBeTruthy();
  });
});
