import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);    // NestFactory is a function and appmodule is a class. it creates our nest app.
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
