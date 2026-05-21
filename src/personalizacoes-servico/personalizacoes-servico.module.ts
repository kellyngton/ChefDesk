import { Module } from '@nestjs/common';
import { PersonalizacoesServicoService } from './personalizacoes-servico.service';
import { PersonalizacoesServicoController } from './personalizacoes-servico.controller';

@Module({
  controllers: [PersonalizacoesServicoController],
  providers: [PersonalizacoesServicoService],
})
export class PersonalizacoesServicoModule {}
