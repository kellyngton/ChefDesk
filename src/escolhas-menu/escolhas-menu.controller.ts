import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EscolhasMenuService } from './escolhas-menu.service';
import { CreateEscolhasMenuDto } from './dto/create-escolhas-menu.dto';
import { UpdateEscolhasMenuDto } from './dto/update-escolhas-menu.dto';

@Controller('escolhas-menu')
export class EscolhasMenuController {
  constructor(private readonly escolhasMenuService: EscolhasMenuService) {}

  @Post()
  create(@Body() createEscolhasMenuDto: CreateEscolhasMenuDto) {
    return this.escolhasMenuService.create(createEscolhasMenuDto);
  }

  @Get()
  findAll() {
    return this.escolhasMenuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escolhasMenuService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEscolhasMenuDto: UpdateEscolhasMenuDto,
  ) {
    return this.escolhasMenuService.update(+id, updateEscolhasMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.escolhasMenuService.remove(+id);
  }
}
