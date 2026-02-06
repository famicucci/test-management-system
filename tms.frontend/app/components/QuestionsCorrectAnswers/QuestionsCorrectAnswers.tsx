import useQuiz from "@/store/quiz/quiz";
import Answer from "./Answer/Answer";

const QuestionsCorrectAnswers = () => {
  const questions = useQuiz((state) => state.questions);

  return (
    <div>
      {questions.map((question, index) => (
        <div
          key={question.id}
          className="border border-gray-300 p-4 rounded mb-4"
        >
          <div className="flex">
            <p className="mr-1">{index + 1}. </p>
            <p>{question.question}</p>
          </div>
          <Answer question={question} />
        </div>
      ))}
    </div>
  );
};

export default QuestionsCorrectAnswers;
