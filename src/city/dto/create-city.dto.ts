import { Prisma } from "@prisma/client";

export class CreateCityDto {
    name: string;
    vagas?: Prisma.VagaCreateNestedManyWithoutCityInput;
}
