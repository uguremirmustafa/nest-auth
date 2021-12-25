import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  database: 'postgres',
  username: 'anomy',
  password: 'q',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
export default config;
