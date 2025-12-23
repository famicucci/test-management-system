import { Injectable } from '@nestjs/common';
import { questionsMocks } from './mocks/questions.mock';
import { Question as QuestionInterface } from './interfaces/question';
import { InjectRepository } from '@nestjs/typeorm';
import { Question as QuestionEntity } from './questions.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dtos/create-question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(QuestionEntity)
    private questionsRepository: Repository<QuestionEntity>,
  ) {}

  getQuestions(qty: number): QuestionInterface[] {
    return questionsMocks.slice(0, qty);
  }

  createQuestion(question: CreateQuestionDto): Promise<QuestionEntity> {
    const questionEntity = this.questionsRepository.create({
      ...question,
    });

    return this.questionsRepository.save(questionEntity);
  }
}
