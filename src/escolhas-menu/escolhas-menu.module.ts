import { Module } from '@nestjs/common';
import { EscolhasMenuService } from './escolhas-menu.service';
import { EscolhasMenuController } from './escolhas-menu.controller';

@Module({
  controllers: [EscolhasMenuController],
  providers: [EscolhasMenuService],
})
export class EscolhasMenuModule {}
