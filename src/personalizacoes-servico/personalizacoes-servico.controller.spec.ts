import { Test, TestingModule } from '@nestjs/testing';
import { PersonalizacoesServicoController } from './personalizacoes-servico.controller';
import { PersonalizacoesServicoService } from './personalizacoes-servico.service';

describe('PersonalizacoesServicoController', () => {
  let controller: PersonalizacoesServicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalizacoesServicoController],
      providers: [PersonalizacoesServicoService],
    }).compile();

    controller = module.get<PersonalizacoesServicoController>(PersonalizacoesServicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
