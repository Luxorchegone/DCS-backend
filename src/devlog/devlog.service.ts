import { Injectable } from '@nestjs/common';
import { CreateDevlogDto } from './dto/create-devlog.dto';
import { UpdateDevlogDto } from './dto/update-devlog.dto';

@Injectable()
export class DevlogService {
  create(createDevlogDto: CreateDevlogDto) {
    return 'This action adds a new devlog';
  }

  findAll() {
    return `This action returns all devlog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} devlog`;
  }

  update(id: number, updateDevlogDto: UpdateDevlogDto) {
    return `This action updates a #${id} devlog`;
  }

  remove(id: number) {
    return `This action removes a #${id} devlog`;
  }
}
