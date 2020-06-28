import { join } from 'path';

export default {
  type: process.env.DB_TYPE || 'postgres',
  url: process.env.DATABASE_URL,
  entities: [
    join(__dirname, '..', '/**/*.entity{.ts,.js}'),
  ],
  migrationsTableName: 'migration',
  migrations: ['src/migration/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
  ssl: process.env.DB_SSL === 'true',
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  logging: process.env.DB_LOGGING === 'true',
};