import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { FilesModule } from './files/files.module';
import { DevlogModule } from './devlog/devlog.module';
import { MainsectionModule } from './mainsection/mainsection.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UserModule, FilesModule, DevlogModule, MainsectionModule, SubscribersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
