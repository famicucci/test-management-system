"use client";
import { useQuestion } from "@/store/question";
import { currentQuestionSelector } from "@/store/question/selectors";
import { useEffect, useState } from "react";

export default function Quiz() {
  const questions = useQuestion((state) => state.questions);
  const current = currentQuestionSelector(useQuestion.getState());
  const setCurrent = useQuestion((state) => state.setCurrentQuestion);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const selectQuestion = (arrLength: number) => {
    return Math.floor(Math.random() * arrLength);
  };

  useEffect(() => {
    if (current === null) {
      setCurrent(selectQuestion(questions.length));
    }
  }, [current, setCurrent]);

  if (current === null) return null;

  const onSelectOption = (idx: number) => {
    setSelectedOption(idx);
    if (idx === current.answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setCurrent(selectQuestion(questions.length));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-lg font-bold mb-2">{current.question}</h2>
      <ul>
        {current.options.map((opt, idx) => (
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
      {selectedOption !== null && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={nextQuestion}
        >
          Next
        </button>
      )}
    </div>
  );
}
