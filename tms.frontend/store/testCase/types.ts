import { TestCase } from "@/interfaces/testCase";

export interface TestCaseState {
  testCases: TestCase[];
  status: TestCaseStatus;
  fetchTestCases: () => Promise<void>;
}

export type TestCaseStatus = "iddle" | "loading" | "succeeded" | "failed";
