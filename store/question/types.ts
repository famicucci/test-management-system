import { Question } from "@/interfaces/question";

export type QuestionState = {
  questions: Question[];
  currentQuestion: number | null;
  setCurrentQuestion: (index: number) => void;
};
