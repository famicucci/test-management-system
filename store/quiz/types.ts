import { Question } from "@/interfaces/question";

export interface QuizState {
  questions: Question[];
  currentQuestion: number | null;
  nextQuestion: () => void;
  answerQuestion: (questionId: number, answeredOptionId: number | null) => void;
}
