import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevlogService } from './devlog.service';
import { CreateDevlogDto } from './dto/create-devlog.dto';
import { UpdateDevlogDto } from './dto/update-devlog.dto';

@Controller('devlog')
export class DevlogController {
  constructor(private readonly devlogService: DevlogService) {}

  @Post()
  create(@Body() createDevlogDto: CreateDevlogDto) {
    return this.devlogService.create(createDevlogDto);
  }

  @Get()
  findAll() {
    return this.devlogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devlogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDevlogDto: UpdateDevlogDto) {
    return this.devlogService.update(+id, updateDevlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devlogService.remove(+id);
  }
}
