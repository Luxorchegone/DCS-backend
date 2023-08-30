import { Module } from '@nestjs/common';
import { MainsectionService } from './mainsection.service';
import { MainsectionController } from './mainsection.controller';

@Module({
  controllers: [MainsectionController],
  providers: [MainsectionService],
})
export class MainsectionModule {}
