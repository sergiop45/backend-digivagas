import { Module } from '@nestjs/common';
import { VagaService } from './vaga.service';
import { VagaController } from './vaga.controller';

@Module({
  controllers: [VagaController],
  providers: [VagaService]
})
export class VagaModule {}
