/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateEscolhasMenuDto } from './dto/create-escolhas-menu.dto';
import { UpdateEscolhasMenuDto } from './dto/update-escolhas-menu.dto';

@Injectable()
export class EscolhasMenuService {
  create(createEscolhasMenuDto: CreateEscolhasMenuDto) {
    return 'This action adds a new escolhasMenu';
  }

  findAll() {
    return `This action returns all escolhasMenu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} escolhasMenu`;
  }

  update(id: number, updateEscolhasMenuDto: UpdateEscolhasMenuDto) {
    return `This action updates a #${id} escolhasMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} escolhasMenu`;
  }
}
