import { Question } from "@/interfaces/testCase";

export interface QuizState {
  questions: Question[];
  currentQuestion: number;
  status: QuizStatus;
  nextQuestion: () => void;
  answerQuestion: (questionId: number, answeredOptionId: number | null) => void;
  fetchQuestions: () => Promise<void>;
}

export type QuizStatus = "iddle" | "loading" | "succeeded" | "failed";
