import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PratosCardapioService } from './pratos-cardapio.service';
import { CreatePratosCardapioDto } from './dto/create-pratos-cardapio.dto';
import { UpdatePratosCardapioDto } from './dto/update-pratos-cardapio.dto';

@Controller('pratos-cardapio')
export class PratosCardapioController {
  constructor(private readonly pratosCardapioService: PratosCardapioService) {}

  @Post()
  create(@Body() createPratosCardapioDto: CreatePratosCardapioDto) {
    return this.pratosCardapioService.create(createPratosCardapioDto);
  }

  @Get()
  findAll() {
    return this.pratosCardapioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pratosCardapioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePratosCardapioDto: UpdatePratosCardapioDto) {
    return this.pratosCardapioService.update(+id, updatePratosCardapioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pratosCardapioService.remove(+id);
  }
}
