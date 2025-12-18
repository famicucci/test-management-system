import { QuizState } from "./types";

const currentQuestionSelector = (state: QuizState) => {
  if (state.currentQuestion === null) return null;

  return state.questions[state.currentQuestion];
};

export { currentQuestionSelector };
