import { MyroutingModule } from './myrouting.module';

describe('MyroutingModule', () => {
  let myroutingModule: MyroutingModule;

  beforeEach(() => {
    myroutingModule = new MyroutingModule();
  });

  it('should create an instance', () => {
    expect(myroutingModule).toBeTruthy();
  });
});
