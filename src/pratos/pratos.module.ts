import { Module } from '@nestjs/common';
import { PratosService } from './pratos.service';
import { PratosController } from './pratos.controller';
import { Prato } from './entities/prato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Prato])],
  controllers: [PratosController],
  providers: [PratosService],
  exports: [PratosService],
})
export class PratosModule {}
