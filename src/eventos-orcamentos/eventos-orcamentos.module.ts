import { Module } from '@nestjs/common';
import { EventosOrcamentosService } from './eventos-orcamentos.service';
import { EventosOrcamentosController } from './eventos-orcamentos.controller';

@Module({
  controllers: [EventosOrcamentosController],
  providers: [EventosOrcamentosService],
})
export class EventosOrcamentosModule {}
