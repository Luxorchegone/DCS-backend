import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { DevlogModule } from './devlog/devlog.module';
import { MainsectionModule } from './mainsection/mainsection.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DevLogEntity } from './devlog/entities/devlog.entity';
import { MainSectionEntity } from './mainsection/entities/mainsection.entity';
import { UserEntity } from './users/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [DevLogEntity, MainSectionEntity, UserEntity],
      //не забыть убрать синхронизацию проде!
      synchronize: true,
    }),
    AuthModule,
    FilesModule,
    DevlogModule,
    MainsectionModule,
    SubscribersModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
