"use client";
import { Question } from "../Question";
import NextButton from "../NextButton/NextButton";
import QuestionNumber from "../QuestionNumber/QuestionNumber";

export default function Quiz() {
  return (
    <div className="max-w-md mx-auto p-4">
      <Question />
      <div className="flex flex-row justify-between items-center">
        <NextButton />
        <QuestionNumber />
      </div>
    </div>
  );
}
