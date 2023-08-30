import { Module } from '@nestjs/common';
import { DevlogService } from './devlog.service';
import { DevlogController } from './devlog.controller';

@Module({
  controllers: [DevlogController],
  providers: [DevlogService],
})
export class DevlogModule {}
