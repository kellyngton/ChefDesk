import { Module } from '@nestjs/common';
import { ConfiguracoesCockpitService } from './configuracoes-cockpit.service';
import { ConfiguracoesCockpitController } from './configuracoes-cockpit.controller';

@Module({
  controllers: [ConfiguracoesCockpitController],
  providers: [ConfiguracoesCockpitService],
})
export class ConfiguracoesCockpitModule {}
