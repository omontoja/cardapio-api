import { Module } from '@nestjs/common';
import { PratosModule } from './pratos/pratos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Prato } from './pratos/entities/prato.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: 5432,
      username: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      entities: [Prato],
      synchronize: true,
    }),
    PratosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
