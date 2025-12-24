import { Question } from "@/interfaces/question";

const Answer = ({ question }: { question: Question }) => {
  const selectedOption = question.options.find(
    (option) => option.id === question.selectedAnswer
  );
  const isCorrect = selectedOption?.isCorrect;

  return (
    <div className="text-left">
      <p>
        <span className="font-bold">Answer:</span>{" "}
        {selectedOption ? selectedOption.text : "No answer selected"}
      </p>
      <p>
        <span className="font-bold">Correct Answer:</span>{" "}
        {isCorrect ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default Answer;
