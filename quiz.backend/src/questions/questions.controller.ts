import { Controller, Get, Query } from '@nestjs/common';
import { Question } from './interfaces/question';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  getQuestions(@Query('qty') qty: number): Question[] {
    return this.questionsService.getQuestions(qty);
  }
}
