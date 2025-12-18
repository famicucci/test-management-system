import { useState } from "react";
import { QuestionProps } from "./types";
import useQuiz from "@/store/quiz/quiz";
import { currentQuestionSelector } from "@/store/quiz/selectors";

const Question = ({ setScore }: QuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const currentQuestion = useQuiz(currentQuestionSelector);

  const onSelectOption = (idx: number) => {
    setSelectedOption(idx);
  };

  if (!currentQuestion) {
    return <div>No question available</div>;
  }

  return (
    <>
      <h2 className="text-lg font-bold mb-2">{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((opt, idx) => (
          <li key={idx}>
            <button
              className={`block w-full text-left p-2 mb-2 border rounded ${
                selectedOption === idx ? "bg-blue-200" : "bg-white"
              }`}
              onClick={() => onSelectOption(idx)}
              disabled={selectedOption !== null}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Question;
