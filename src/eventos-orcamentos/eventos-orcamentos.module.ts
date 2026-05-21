import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventosOrcamentosController } from './eventos-orcamentos.controller';
import { EventosOrcamentosService } from './eventos-orcamentos.service';
import {
  EventoOrcamento,
  EventoOrcamentoSchema,
} from './schemas/evento-orcamento.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: EventoOrcamento.name,
        schema: EventoOrcamentoSchema,
      },
    ]),
  ],
  controllers: [EventosOrcamentosController],
  providers: [EventosOrcamentosService],
})
export class EventosOrcamentosModule {}
