import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { QuestionsService } from '../questions/questions.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionsService = app.get(QuestionsService);

  await questionsService.createQuestion({
    question: 'What is the capital of France?',
    options: [
      { text: 'Berlin', isCorrect: false },
      { text: 'Madrid', isCorrect: false },
      { text: 'Paris', isCorrect: true },
      { text: 'Rome', isCorrect: false },
    ],
    explanation: 'Paris is the capital and most populous city of France.',
  });

  await app.close();
}

bootstrap();
