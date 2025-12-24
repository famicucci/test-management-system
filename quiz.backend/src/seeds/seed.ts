import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { QuestionsService } from '../questions/questions.service';
import { questionsMocks } from '../questions/mocks/questions.mock';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionsService = app.get(QuestionsService);

  await Promise.all(
    questionsMocks.map((q) => questionsService.createQuestion(q)),
  );

  await app.close();
}

bootstrap();
