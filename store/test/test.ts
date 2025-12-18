import { create } from "zustand";
import { TestState } from "./types";

const useTest = create<TestState>((set) => ({
  questionsQuantity: 10,
  currentQuestionNumber: null,
  correctAnswers: 0,
  setCurrentQuestionNumber: (current: number | null) =>
    set(() => ({ currentQuestionNumber: current })),
  incrementCorrectAnswers: () =>
    set((state) => ({ correctAnswers: state.correctAnswers + 1 })),
}));

export default useTest;
