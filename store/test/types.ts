export interface TestState {
  questionsQuantity: number;
  currentQuestionNumber: number | null;
  correctAnswers: number;
  setCurrentQuestionNumber: (current: number | null) => void;
  incrementCorrectAnswers: () => void;
}
