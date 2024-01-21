import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {IoAdapter} from '@nestjs/platform-socket.io';
import * as http from 'http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new IoAdapter(app));
  await app.listen(3000);
}
bootstrap();
