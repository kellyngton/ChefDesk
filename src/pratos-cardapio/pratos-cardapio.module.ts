import { Module } from '@nestjs/common';
import { PratosCardapioService } from './pratos-cardapio.service';
import { PratosCardapioController } from './pratos-cardapio.controller';

@Module({
  controllers: [PratosCardapioController],
  providers: [PratosCardapioService],
})
export class PratosCardapioModule {}
