import { Question } from "@/interfaces/question";
import Accordion from "../../Accordion/Accordion";

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
      <Accordion title="Explanation">
        <p>{question.explanation}</p>
      </Accordion>
    </div>
  );
};

export default Answer;
