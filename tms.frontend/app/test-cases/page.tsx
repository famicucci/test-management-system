import React from "react";
import TestCases from "./components/TestCases";
import TestCaseForm from "./components/TestCaseForm";

const Page = () => {
  return (
    <div>
      <h1>Test Cases</h1>
      <div className="py-2">
        <TestCaseForm />
      </div>
      <TestCases />
    </div>
  );
};

export default Page;
