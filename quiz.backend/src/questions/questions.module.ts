import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './questions.entity';
import { Option } from './options.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Option])],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
