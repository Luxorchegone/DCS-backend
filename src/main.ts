import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://garnet-dcs.tech/', 'http://127.0.0.1:5173'],
    methods: ['GET', 'HEAD', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, authorization, X-Forwarded-for, X-Api-Key, Access-Control-Allow-Origin',
  });
  //TODO: донастроить CORS
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.MAIN_PORT);
}
bootstrap();
