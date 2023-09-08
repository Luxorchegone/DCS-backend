import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { CreateMainsectionDto } from './dto/create-mainsection.dto';
import { UpdateMainsectionDto } from './dto/update-mainsection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MainSectionEntity } from './entities/mainsection.entity';
import { Repository } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Injectable()
export class MainsectionService {
  constructor(
    @InjectRepository(MainSectionEntity)
    private repository: Repository<MainSectionEntity>,
  ) {}

  @UseGuards(JwtAuthGuard)
  create(createMainsectionDto: CreateMainsectionDto) {
    return this.repository.save(createMainsectionDto);
  }

  findAll() {
    return this.repository.find({
      order: {
        id: 'ASC',
      },
    });
  }

  async findOne(id: number) {
    const findMainSection = await this.repository.findOneBy({ id: id });
    if (!findMainSection) {
      throw new NotFoundException('Данная запись не найдена');
    }
    return findMainSection;
  }

  @UseGuards(JwtAuthGuard)
  async update(id: number, updateMainsectionDto: UpdateMainsectionDto) {
    const findMainSection = await this.repository.findOneBy({ id: id });
    if (!findMainSection) {
      throw new NotFoundException(
        'Данная запись не найдена, редактирование невозможно',
      );
    }
    return this.repository.update(id, {
      tag: updateMainsectionDto.tag,
      title: updateMainsectionDto.title,
      mainContent: updateMainsectionDto.mainContent,
      leftImage: updateMainsectionDto.leftImage,
    });
  }

  @UseGuards(JwtAuthGuard)
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
