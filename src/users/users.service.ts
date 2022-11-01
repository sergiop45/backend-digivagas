import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const data = {
      ...createUserDto, 
      password: await bcrypt.hash(createUserDto.password, 8)
    }
    const createdUser = await this.prisma.user.create({data});

    return {
      ...createdUser,
      password: undefined,
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({where: {id: id}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      data: updateUserDto,
      where: {
        id: id
      }
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({where: { id: id }});
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
