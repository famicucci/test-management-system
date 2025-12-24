import { create } from "zustand";
import { QuizState } from "./types";
import { Question } from "@/interfaces/question";

const useQuiz = create<QuizState>((set) => ({
  questions: [],
  currentQuestion: 0,
  status: "iddle",
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
  fetchQuestions: async () => {
    set({ status: "loading" });
    try {
      const res = await fetch("http://localhost:4000/questions?qty=10");
      const data: Question[] = await res.json();
      set({
        questions: data.map((q: any) => ({ ...q, selectedAnswer: null })),
        status: "succeeded",
      });
    } catch (err) {
      set({ status: "failed" });
    }
  },
}));

export default useQuiz;
