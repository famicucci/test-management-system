import { Question } from "@/interfaces/question";
import { questions } from "@/mocks/questionsMocks";
import { create } from "zustand";

type QuestionState = {
  questions: Question[];
  currentQuestion: number;
  setCurrentQuestion: (index: number) => void;
};

const useQuestion = create<QuestionState>((set) => ({
  questions: questions,
  currentQuestion: 0,
  setCurrentQuestion: (id: number) => set(() => ({ currentQuestion: id })),
}));

export default useQuestion;
