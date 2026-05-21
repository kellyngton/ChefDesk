import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConfiguracoesCockpitService } from './configuracoes-cockpit.service';
import { CreateConfiguracoesCockpitDto } from './dto/create-configuracoes-cockpit.dto';
import { UpdateConfiguracoesCockpitDto } from './dto/update-configuracoes-cockpit.dto';

@Controller('configuracoes-cockpit')
export class ConfiguracoesCockpitController {
  constructor(
    private readonly configuracoesCockpitService: ConfiguracoesCockpitService,
  ) {}

  @Post()
  create(@Body() createConfiguracoesCockpitDto: CreateConfiguracoesCockpitDto) {
    return this.configuracoesCockpitService.create(
      createConfiguracoesCockpitDto,
    );
  }

  @Get()
  findAll() {
    return this.configuracoesCockpitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configuracoesCockpitService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConfiguracoesCockpitDto: UpdateConfiguracoesCockpitDto,
  ) {
    return this.configuracoesCockpitService.update(
      +id,
      updateConfiguracoesCockpitDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configuracoesCockpitService.remove(+id);
  }
}
