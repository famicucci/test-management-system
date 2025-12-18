import { create } from "zustand";
import { QuizState } from "./types";
import { questions } from "@/mocks/questionsMocks";

const useQuiz = create<QuizState>((set) => ({
  questions: questions,
  currentQuestion: 0,
  correctAnswers: 0,
  nextQuestion: () =>
    set((state) => {
      if (state.currentQuestion === null) return { currentQuestion: 0 };

      return { currentQuestion: state.currentQuestion + 1 };
    }),
  incrementCorrectAnswers: () =>
    set((state) => ({ correctAnswers: state.correctAnswers + 1 })),
}));

export default useQuiz;
