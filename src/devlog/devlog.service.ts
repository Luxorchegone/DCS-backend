import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { CreateDevlogDto } from './dto/create-devlog.dto';
import { UpdateDevlogDto } from './dto/update-devlog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DevLogEntity } from './entities/devlog.entity';
import { Repository } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Injectable()
export class DevlogService {
  constructor(
    @InjectRepository(DevLogEntity)
    private repository: Repository<DevLogEntity>,
  ) {}

  @UseGuards(JwtAuthGuard)
  create(createDevlogDto: CreateDevlogDto) {
    return this.repository.save(createDevlogDto);
  }

  findAll() {
    return this.repository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    const findDevLog = await this.repository.findOneBy({ id: id });
    if (!findDevLog) {
      throw new NotFoundException('Данная запись не найдена');
    }
    return findDevLog;
  }

  @UseGuards(JwtAuthGuard)
  async update(id: number, updateDevlogDto: UpdateDevlogDto) {
    const findDevLog = await this.repository.findOneBy({ id: id });
    if (!findDevLog) {
      throw new NotFoundException(
        'Данная запись не найдена, редактирование невозможно',
      );
    }
    return this.repository.update(id, {
      title: updateDevlogDto.title,
      mainContent: updateDevlogDto.mainContent,
      previewContent: updateDevlogDto.previewContent,
    });
  }

  @UseGuards(JwtAuthGuard)
  async remove(id: number) {
    const findDevLog = await this.repository.findOneBy({ id: id });

    if (!findDevLog) {
      throw new NotFoundException(
        'Данная запись не найдена, удаление невозможно',
      );
    }
    return this.repository.delete(id);
  }
}
