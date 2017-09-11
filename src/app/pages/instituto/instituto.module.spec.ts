import { InstitutoModule } from './instituto.module';

describe('InstitutoModule', () => {
  let institutoModule: InstitutoModule;

  beforeEach(() => {
    institutoModule = new InstitutoModule();
  });

  it('should create an instance', () => {
    expect(institutoModule).toBeTruthy();
  });
});
