"use client";
import { useState } from "react";
import { Question } from "../Question";
import NextButton from "../NextButton/NextButton";
import useQuiz from "@/store/quiz/quiz";
import QuestionNumber from "../QuestionNumber/QuestionNumber";

export default function Quiz() {
  const [score, setScore] = useState(0);
  const questions = useQuiz((state) => state.questions);

  return (
    <div className="max-w-md mx-auto p-4">
      <Question setScore={setScore} />
      <div className="flex flex-row justify-between items-center">
        <NextButton />
        <QuestionNumber />
      </div>
    </div>
  );
}
