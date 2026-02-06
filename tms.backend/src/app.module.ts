import { Module } from '@nestjs/common';
import { QuestionsModule } from './questions/questions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(config), QuestionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
