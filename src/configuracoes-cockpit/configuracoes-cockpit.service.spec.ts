import { Test, TestingModule } from '@nestjs/testing';
import { ConfiguracoesCockpitService } from './configuracoes-cockpit.service';

describe('ConfiguracoesCockpitService', () => {
  let service: ConfiguracoesCockpitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfiguracoesCockpitService],
    }).compile();

    service = module.get<ConfiguracoesCockpitService>(ConfiguracoesCockpitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
