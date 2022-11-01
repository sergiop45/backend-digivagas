import { Prisma } from "@prisma/client";

export class CreateVagaDto {
    titulo: string
    description: string
    fone: string
    city: Prisma.CityCreateNestedOneWithoutVagasInput
    user: Prisma.UserCreateNestedOneWithoutVagasInput
}
