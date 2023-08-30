import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MainsectionService } from './mainsection.service';
import { CreateMainsectionDto } from './dto/create-mainsection.dto';
import { UpdateMainsectionDto } from './dto/update-mainsection.dto';

@Controller('mainsection')
export class MainsectionController {
  constructor(private readonly mainsectionService: MainsectionService) {}

  @Post()
  create(@Body() createMainsectionDto: CreateMainsectionDto) {
    return this.mainsectionService.create(createMainsectionDto);
  }

  @Get()
  findAll() {
    return this.mainsectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mainsectionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMainsectionDto: UpdateMainsectionDto) {
    return this.mainsectionService.update(+id, updateMainsectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mainsectionService.remove(+id);
  }
}
