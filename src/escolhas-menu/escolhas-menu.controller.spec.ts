import { Test, TestingModule } from '@nestjs/testing';
import { EscolhasMenuController } from './escolhas-menu.controller';
import { EscolhasMenuService } from './escolhas-menu.service';

describe('EscolhasMenuController', () => {
  let controller: EscolhasMenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EscolhasMenuController],
      providers: [EscolhasMenuService],
    }).compile();

    controller = module.get<EscolhasMenuController>(EscolhasMenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
