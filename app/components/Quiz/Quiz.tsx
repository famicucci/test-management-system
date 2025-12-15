"use client";
import { useState } from "react";
import { questions } from "@/app/mocks/questionsMocks";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const handleOptionClick = (idx: number) => {
    setSelected(idx);
    if (idx === questions[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    setCurrent(current + 1);
  };

  if (current >= questions.length) {
    return (
      <div>
        Your score: {score} / {questions.length}
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-lg font-bold mb-2">{questions[current].question}</h2>
      <ul>
        {questions[current].options.map((opt, idx) => (
          <li key={idx}>
            <button
              className={`block w-full text-left p-2 mb-2 border rounded ${
                selected === idx ? "bg-blue-200" : "bg-white"
              }`}
              onClick={() => handleOptionClick(idx)}
              disabled={selected !== null}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
      {selected !== null && (
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
