import { Question } from "@/interfaces/question";

export interface QuizState {
  questions: Question[];
  currentQuestion: number | null;
  correctAnswers: number;
  nextQuestion: () => void;
  incrementCorrectAnswers: () => void;
}
