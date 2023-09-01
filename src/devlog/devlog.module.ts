import { Module } from '@nestjs/common';
import { DevlogService } from './devlog.service';
import { DevlogController } from './devlog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevLogEntity } from './entities/devlog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DevLogEntity])],
  controllers: [DevlogController],
  providers: [DevlogService],
})
export class DevlogModule {}
