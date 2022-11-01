import { Module } from '@nestjs/common';
import { VagaService } from './vaga.service';
import { VagaController } from './vaga.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [VagaController],
  providers: [VagaService,PrismaService]
})
export class VagaModule {}
