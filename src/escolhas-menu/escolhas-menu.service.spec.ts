import { Test, TestingModule } from '@nestjs/testing';
import { EscolhasMenuService } from './escolhas-menu.service';

describe('EscolhasMenuService', () => {
  let service: EscolhasMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EscolhasMenuService],
    }).compile();

    service = module.get<EscolhasMenuService>(EscolhasMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
