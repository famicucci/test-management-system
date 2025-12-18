import { QuizState } from "./types";

const currentQuestionSelector = (state: QuizState) => {
  if (state.currentQuestion === null) return null;

  return state.questions[state.currentQuestion];
};

const scoreSelector = (state: QuizState) => {
  let score = 0;

  state.questions.forEach((question) => {
    if (question.correctAnswer === question.selectedAnswer) {
      score += 1;
    }
  });

  return score;
};

export { currentQuestionSelector, scoreSelector };
