import { Test, TestingModule } from '@nestjs/testing';
import { VagaController } from './vaga.controller';
import { VagaService } from './vaga.service';

describe('VagaController', () => {
  let controller: VagaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VagaController],
      providers: [VagaService],
    }).compile();

    controller = module.get<VagaController>(VagaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
