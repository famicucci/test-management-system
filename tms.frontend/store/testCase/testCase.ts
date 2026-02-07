import { create } from "zustand";
import { CreateTestCaseInput, TestCaseState } from "./types";
import { TestCase } from "@/interfaces/testCase";

const useTestCase = create<TestCaseState>((set) => ({
  testCases: [],
  status: "iddle",
  fetchTestCases: async () => {
    set({ status: "loading" });
    try {
      const res = await fetch("http://localhost:4000/test-cases");
      const data: TestCase[] = await res.json();
      set({
        testCases: data.map((q: any) => ({ ...q, selectedAnswer: null })),
        status: "succeeded",
      });
    } catch (err) {
      set({ status: "failed" });
    }
  },
  createTestCase: async (payload: CreateTestCaseInput) => {
    set({ status: "loading" });
    try {
      const res = await fetch("http://localhost:4000/test-cases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to create test case");
      }

      const created: TestCase = await res.json();

      set((state) => ({
        testCases: [created, ...state.testCases],
        status: "succeeded",
      }));

      return created;
    } catch (err) {
      set({ status: "failed" });
      throw err;
    }
  },
}));

export default useTestCase;
