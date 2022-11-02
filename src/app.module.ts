import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VagaModule } from './vaga/vaga.module';
import { CityModule } from './city/city.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/guards/jwt.guards';


@Module({
  imports: [VagaModule, CityModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, {
              provide: APP_GUARD,
              useClass: JwtGuard
              }, ],
})
export class AppModule {}
