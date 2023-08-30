import { Injectable } from '@nestjs/common';
import { CreateMainsectionDto } from './dto/create-mainsection.dto';
import { UpdateMainsectionDto } from './dto/update-mainsection.dto';

@Injectable()
export class MainsectionService {
  create(createMainsectionDto: CreateMainsectionDto) {
    return 'This action adds a new mainsection';
  }

  findAll() {
    return `This action returns all mainsection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mainsection`;
  }

  update(id: number, updateMainsectionDto: UpdateMainsectionDto) {
    return `This action updates a #${id} mainsection`;
  }

  remove(id: number) {
    return `This action removes a #${id} mainsection`;
  }
}
