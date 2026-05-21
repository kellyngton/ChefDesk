import { Test, TestingModule } from '@nestjs/testing';
import { ConfiguracoesCockpitController } from './configuracoes-cockpit.controller';
import { ConfiguracoesCockpitService } from './configuracoes-cockpit.service';

describe('ConfiguracoesCockpitController', () => {
  let controller: ConfiguracoesCockpitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfiguracoesCockpitController],
      providers: [ConfiguracoesCockpitService],
    }).compile();

    controller = module.get<ConfiguracoesCockpitController>(ConfiguracoesCockpitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
