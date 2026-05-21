import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonalizacoesServicoService } from './personalizacoes-servico.service';
import { CreatePersonalizacoesServicoDto } from './dto/create-personalizacoes-servico.dto';
import { UpdatePersonalizacoesServicoDto } from './dto/update-personalizacoes-servico.dto';

@Controller('personalizacoes-servico')
export class PersonalizacoesServicoController {
  constructor(
    private readonly personalizacoesServicoService: PersonalizacoesServicoService,
  ) {}

  @Post()
  create(
    @Body() createPersonalizacoesServicoDto: CreatePersonalizacoesServicoDto,
  ) {
    return this.personalizacoesServicoService.create(
      createPersonalizacoesServicoDto,
    );
  }

  @Get()
  findAll() {
    return this.personalizacoesServicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personalizacoesServicoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePersonalizacoesServicoDto: UpdatePersonalizacoesServicoDto,
  ) {
    return this.personalizacoesServicoService.update(
      +id,
      updatePersonalizacoesServicoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalizacoesServicoService.remove(+id);
  }
}
