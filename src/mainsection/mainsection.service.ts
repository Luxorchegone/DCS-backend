import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMainsectionDto } from './dto/create-mainsection.dto';
import { UpdateMainsectionDto } from './dto/update-mainsection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MainSectionEntity } from './entities/mainsection.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MainsectionService {
  constructor(
    @InjectRepository(MainSectionEntity)
    private repository: Repository<MainSectionEntity>,
  ) {}

  create(createMainsectionDto: CreateMainsectionDto) {
    return this.repository.save(createMainsectionDto);
  }

  findAll() {
    return this.repository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  //Сокрее всего по отдельностр секции не нужны
  // async findOne(id: number) {
  //   const findMainSection = await this.repository.findOneBy({ id: id });
  //   if (!findMainSection) {
  //     throw new NotFoundException('Данная запись не найдена');
  //   }

  //   return findMainSection;
  // }

  async update(id: number, updateMainsectionDto: UpdateMainsectionDto) {
    const findMainSection = await this.repository.findOneBy({ id: id });
    if (!findMainSection) {
      throw new NotFoundException(
        'Данная запись не найдена, редактирование невозможно',
      );
    }

    return this.repository.update(id, {
      title: updateMainsectionDto.title,
      mainContent: updateMainsectionDto.mainContent,
    });
  }

  async remove(id: number) {
    const findMainSection = await this.repository.findOneBy({ id: id });

    if (!findMainSection) {
      throw new NotFoundException(
        'Данная запись не найдена, удаление невозможно',
      );
    }

    return this.repository.delete(id);
  }
}
