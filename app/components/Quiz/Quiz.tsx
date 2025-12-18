"use client";
import { Question } from "../Question";
import NextButton from "../NextButton/NextButton";
import QuestionNumber from "../QuestionNumber/QuestionNumber";
import useQuiz from "@/store/quiz/quiz";

export default function Quiz() {
  const currentQuestion = useQuiz((state) => state.currentQuestion);
  const numberOfQuestions = useQuiz((state) => state.numberOfQuestions);

  return (
    <div className="max-w-md mx-auto p-4">
      {currentQuestion <= numberOfQuestions - 1 ? (
        <>
          <Question />
          <div className="flex flex-row justify-between items-center">
            <NextButton />
            <QuestionNumber />
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        </div>
      )}
    </div>
  );
}
