/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreatePersonalizacoesServicoDto } from './dto/create-personalizacoes-servico.dto';
import { UpdatePersonalizacoesServicoDto } from './dto/update-personalizacoes-servico.dto';

@Injectable()
export class PersonalizacoesServicoService {
  create(createPersonalizacoesServicoDto: CreatePersonalizacoesServicoDto) {
    return 'This action adds a new personalizacoesServico';
  }

  findAll() {
    return `This action returns all personalizacoesServico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personalizacoesServico`;
  }

  update(
    id: number,
    updatePersonalizacoesServicoDto: UpdatePersonalizacoesServicoDto,
  ) {
    return `This action updates a #${id} personalizacoesServico`;
  }

  remove(id: number) {
    return `This action removes a #${id} personalizacoesServico`;
  }
}
