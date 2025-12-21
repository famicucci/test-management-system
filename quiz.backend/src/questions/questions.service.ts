import { Injectable } from '@nestjs/common';
import { questionsMocks } from './mocks/questions.mock';
import { Question } from './interfaces/question';

@Injectable()
export class QuestionsService {
  getQuestions(qty: number): Question[] {
    return questionsMocks.slice(0, qty);
  }
}
