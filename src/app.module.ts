import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThrottlerModule } from '@nestjs/throttler/dist/throttler.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ClientesModule } from './clientes/clientes.module';
import { PratosCardapioModule } from './pratos-cardapio/pratos-cardapio.module';
import { EventosOrcamentosModule } from './eventos-orcamentos/eventos-orcamentos.module';
import { EscolhasMenuModule } from './escolhas-menu/escolhas-menu.module';
import { PersonalizacoesServicoModule } from './personalizacoes-servico/personalizacoes-servico.module';
import { ConfiguracoesCockpitModule } from './configuracoes-cockpit/configuracoes-cockpit.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 10,
        },
      ],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    PrismaModule,
    ClientesModule,
    PratosCardapioModule,
    EventosOrcamentosModule,
    EscolhasMenuModule,
    PersonalizacoesServicoModule,
    ConfiguracoesCockpitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
