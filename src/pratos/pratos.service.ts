import { Injectable } from '@nestjs/common';
import { CreatePratoDto } from './dto/create-prato.dto';
import { UpdatePratoDto } from './dto/update-prato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prato } from './entities/prato.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PratosService {
  constructor(
    @InjectRepository(Prato) private pratoRepository: Repository<Prato>,
  ) {}
  create(createPratoDto: CreatePratoDto) {
    return this.pratoRepository.save(createPratoDto);
  }

  findAll() {
    return this.pratoRepository.find();
  }

  findOne(id: number) {
    return this.pratoRepository.findOneBy({ id: id });
  }

  update(id: number, updatePratoDto: UpdatePratoDto) {
    return this.pratoRepository.update(id, updatePratoDto);
  }

  remove(id: number) {
    return this.pratoRepository.delete(id);
  }
}
