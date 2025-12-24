import useQuiz from "@/store/quiz/quiz";
import { currentQuestionSelector } from "@/store/quiz/selectors";

const Question = () => {
  const currentQuestion = useQuiz(currentQuestionSelector);
  const setSelectedOption = useQuiz((state) => state.answerQuestion);

  if (!currentQuestion) {
    return <div>No question available</div>;
  }

  return (
    <>
      <h2 className="text-lg font-bold mb-2">{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((opt, idx) => (
          <li key={opt.id}>
            <button
              className={`block w-full text-left p-2 mb-2 border rounded ${
                currentQuestion.selectedAnswer === opt.id
                  ? "bg-blue-200"
                  : "bg-white"
              }`}
              onClick={() => setSelectedOption(currentQuestion.id, opt.id)}
              disabled={currentQuestion.selectedAnswer !== null}
            >
              {opt.text}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Question;
