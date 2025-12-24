import { Question } from "@/interfaces/question";
import useQuiz from "@/store/quiz/quiz";
import { scoreSelector } from "@/store/quiz/selectors";
import QuestionsCorrectAnswers from "../QuestionsCorrectAnswers/QuestionsCorrectAnswers";

const CompletedQuiz = () => {
  const score = useQuiz(scoreSelector);
  const questions = useQuiz((state) => state.questions);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-lg mb-6">
        Your Score: {score} / {questions.length}
      </p>
      <QuestionsCorrectAnswers />
    </div>
  );
};

export default CompletedQuiz;
