import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Option } from './questions/options.entity';
import { Question } from './questions/questions.entity';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'yourpassword',
  database: 'quizdb',
  entities: [Question, Option],
  synchronize: true, // Auto-creates tables in dev, turn off in production!
};

export default config;
