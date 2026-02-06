import useQuiz from "@/store/quiz/quiz";

const QuestionNumber = () => {
  const currentQuestionIndex = useQuiz((state) => state.currentQuestion);
  const totalQuestions = useQuiz((state) => state.questions.length);

  if (currentQuestionIndex === null) return null;

  return (
    <div>
      {currentQuestionIndex + 1} / {totalQuestions}
    </div>
  );
};

export default QuestionNumber;
