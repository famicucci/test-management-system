import { Injectable } from '@nestjs/common';
import { questionsMocks } from './mocks/questions.mock';
import { Question } from './interfaces/question';

@Injectable()
export class QuestionsService {
  getQuestions(): Question[] {
    return questionsMocks;
  }
}
