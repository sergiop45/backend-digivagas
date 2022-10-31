import { PartialType } from '@nestjs/mapped-types';
import { CreateVagaDto } from './create-vaga.dto';

export class UpdateVagaDto extends PartialType(CreateVagaDto) {}
