import { create } from "zustand";
import { QuizState } from "./types";
import { questionsMocks } from "@/mocks/questionsMocks";

const useQuiz = create<QuizState>((set) => ({
  questions: questionsMocks
    .slice(0, 10)
    .map((q) => ({ ...q, selectedAnswer: null })),
  currentQuestion: 0,
  nextQuestion: () =>
    set((state) => {
      if (state.currentQuestion === null) return { currentQuestion: 0 };

      return { currentQuestion: state.currentQuestion + 1 };
    }),
  answerQuestion: (questionId: number, answeredOptionId: number | null) =>
    set((state) => ({
      questions: state.questions.map((question) =>
        question.id === questionId
          ? { ...question, selectedAnswer: answeredOptionId }
          : question
      ),
    })),
}));

export default useQuiz;
