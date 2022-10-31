import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VagaModule } from './vaga/vaga.module';
import { CityModule } from './city/city.module';


@Module({
  imports: [VagaModule, CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
