import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = app.get(ConfigService);
  const port = config.get('app.port');

  await app.listen(port).then(() => {
    Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
  });
}

bootstrap();