import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { UpdateVagaDto } from './dto/update-vaga.dto';

@Injectable()
export class VagaService {
  constructor(private readonly prisma: PrismaService){}

  create(createVagaDto: CreateVagaDto) {
    return this.prisma.vaga.create({data: createVagaDto});
  }

  findAll() {
    return this.prisma.vaga.findMany();
  }

  findOne(id: number) {
    return this.prisma.vaga.findUnique({where: {id: id}});
  }

  update(id: number, updateVagaDto: UpdateVagaDto) {
    return this.prisma.vaga.update({where: {id:id}, data:updateVagaDto});
  }

  remove(id: number) {
    return this.prisma.vaga.delete({where: {id: id}});
  }
}
