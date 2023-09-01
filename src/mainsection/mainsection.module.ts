import { Module } from '@nestjs/common';
import { MainsectionService } from './mainsection.service';
import { MainsectionController } from './mainsection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainSectionEntity } from './entities/mainsection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MainSectionEntity])],
  controllers: [MainsectionController],
  providers: [MainsectionService],
})
export class MainsectionModule {}
