import { Question } from "@/interfaces/question";
import useQuiz from "@/store/quiz/quiz";
import { scoreSelector } from "@/store/quiz/selectors";

const CompletedQuiz = () => {
  const score = useQuiz(scoreSelector);
  const questions = useQuiz((state) => state.questions);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-lg">
        Your Score: {score} / {questions.length}
      </p>
    </div>
  );
};

export default CompletedQuiz;
