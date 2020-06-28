import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from 'nestjs-config';
import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';

const NODE_ENV = process.env.NODE_ENV;

const MODULES = [
  ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}'), {
    path: path.resolve(process.cwd(), !NODE_ENV ? '.env' : `.env.${NODE_ENV}`),
  }),
  TypeOrmModule.forRootAsync({
    useFactory: (config: ConfigService) => {
      const app = config.get('app');
      const db = config.get('db');
      console.log('NODE_ENV: ', NODE_ENV);
      console.log('app: ', app);
      console.log('db: ', db);
      return db;
    },
    inject: [ConfigService],
  }),
];

@Module({
  imports: [
    ...MODULES,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

export { MODULES };
