import { Injectable } from '@nestjs/common';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { UpdateVagaDto } from './dto/update-vaga.dto';

@Injectable()
export class VagaService {
  create(createVagaDto: CreateVagaDto) {
    return 'This action adds a new vaga';
  }

  findAll() {
    return `This action returns all vaga`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vaga`;
  }

  update(id: number, updateVagaDto: UpdateVagaDto) {
    return `This action updates a #${id} vaga`;
  }

  remove(id: number) {
    return `This action removes a #${id} vaga`;
  }
}
