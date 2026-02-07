import { create } from "zustand";
import { TestCaseState } from "./types";
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
}));

export default useTestCase;
