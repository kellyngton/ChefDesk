import { Injectable } from '@nestjs/common';
import { CreatePratosCardapioDto } from './dto/create-pratos-cardapio.dto';
import { UpdatePratosCardapioDto } from './dto/update-pratos-cardapio.dto';

@Injectable()
export class PratosCardapioService {
  create(createPratosCardapioDto: CreatePratosCardapioDto) {
    return 'This action adds a new pratosCardapio';
  }

  findAll() {
    return `This action returns all pratosCardapio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pratosCardapio`;
  }

  update(id: number, updatePratosCardapioDto: UpdatePratosCardapioDto) {
    return `This action updates a #${id} pratosCardapio`;
  }

  remove(id: number) {
    return `This action removes a #${id} pratosCardapio`;
  }
}
