import { Test } from "@/interfaces/test";

export type CreateTestInput = Omit<Test, "id" | "testCase"> & {
  testCaseId: number;
};

export interface TestState {
  tests: Test[];
  status: TestStatus;
  fetchTests: () => Promise<void>;
  createTest: (payload: CreateTestInput) => Promise<Test>;
  deleteTest: (id: number) => Promise<void>;
}

export type TestStatus = "iddle" | "loading" | "succeeded" | "failed";
