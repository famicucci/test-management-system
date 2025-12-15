import { Question } from "@/interfaces/question";
import { questions } from "@/mocks/questionsMocks";
import { create } from "zustand";
import { QuestionState } from "./types";

const useQuestion = create<QuestionState>((set) => ({
  questions: questions,
  currentQuestion: null,
  setCurrentQuestion: (id: number) => set(() => ({ currentQuestion: id })),
}));

export default useQuestion;
