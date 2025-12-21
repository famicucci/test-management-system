"use client";
import { Question } from "../Question";
import NextButton from "../NextButton/NextButton";
import QuestionNumber from "../QuestionNumber/QuestionNumber";
import useQuiz from "@/store/quiz/quiz";
import { CompletedQuiz } from "../CompletedQuiz";
import { useEffect } from "react";

export default function Quiz() {
  const currentQuestion = useQuiz((state) => state.currentQuestion);
  const numberOfQuestions = useQuiz((state) => state.questions.length);
  const fetchQuestions = useQuiz((state) => state.fetchQuestions);
  const status = useQuiz((state) => state.status);
  console.log("Quiz status:", status);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

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
        <CompletedQuiz />
      )}
    </div>
  );
}
