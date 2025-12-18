import { QuestionState } from "./types";

const currentQuestionSelector = (state: QuestionState) => {
  if (state.currentQuestion === null) return null;

  return state.questions[state.currentQuestion];
};

export { currentQuestionSelector };
