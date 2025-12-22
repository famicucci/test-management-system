import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { QuestionsService } from 'src/questions/questions.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionsService = app.get(QuestionsService);

  // Example: Insert a question
  //   await questionsService.create({
  //     text: 'What is the capital of France?',
  //     options: [
  //       { text: 'Paris', isCorrect: true },
  //       { text: 'London', isCorrect: false },
  //     ],
  //   });

  await app.close();
}

bootstrap();
