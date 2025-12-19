import useQuiz from "@/store/quiz/quiz";

const NextButton = () => {
  const nextQuestion = useQuiz((state) => state.nextQuestion);

  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      onClick={nextQuestion}
    >
      Next
    </button>
  );
};

export default NextButton;
