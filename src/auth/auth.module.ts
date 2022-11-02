import { Module } from '@nestjs/common';
import { JwtModule} from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  providers: [AuthService, UsersService,
             PrismaService, LocalStrategy, JwtStrategy],
  imports: [UsersModule, PassportModule, 
            JwtModule.register({
            secret: process.env.SECRET_KEY,
            signOptions: { expiresIn: '600s' },
            }),
            ],
  controllers: [AuthController]          
})
export class AuthModule {}
