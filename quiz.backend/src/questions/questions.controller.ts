import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Question } from './interfaces/question';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dtos/create-question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  getQuestions(@Query('qty') qty: number): Question[] {
    return this.questionsService.getQuestions(qty);
  }

  @Post()
  createQuestion(@Body() question: CreateQuestionDto) {
    return this.questionsService.createQuestion(question);
  }
}
