import { Question } from "@/interfaces/question";

export interface QuizState {
  questions: Question[];
  numberOfQuestions: number;
  currentQuestion: number;
  nextQuestion: () => void;
  answerQuestion: (questionId: number, answeredOptionId: number | null) => void;
}
