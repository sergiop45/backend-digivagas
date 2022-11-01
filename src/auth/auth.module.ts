import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService, UsersService, PrismaService],
  imports: [UsersModule]
})
export class AuthModule {}
