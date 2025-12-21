import { Controller, Get } from '@nestjs/common';
import { Question } from './interfaces/question';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  getQuestions(): Question[] {
    return this.questionsService.getQuestions();
  }
}
