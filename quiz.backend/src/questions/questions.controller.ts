import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dtos/create-question.dto';
import { Question } from './questions.entity';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  async getQuestions(@Query('qty') qty: number): Promise<Question[]> {
    return await this.questionsService.getQuestions(qty);
  }

  @Post()
  createQuestion(@Body() question: CreateQuestionDto) {
    return this.questionsService.createQuestion(question);
  }
}
