import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PratosService } from './pratos.service';
import { CreatePratoDto } from './dto/create-prato.dto';
import { UpdatePratoDto } from './dto/update-prato.dto';

@Controller('pratos')
export class PratosController {
  constructor(private readonly pratosService: PratosService) {}

  @Post()
  create(@Body() createPratoDto: CreatePratoDto) {
    return this.pratosService.create(createPratoDto);
  }

  @Get()
  findAll() {
    return this.pratosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pratosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePratoDto: UpdatePratoDto) {
    return this.pratosService.update(+id, updatePratoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pratosService.remove(+id);
  }
}
