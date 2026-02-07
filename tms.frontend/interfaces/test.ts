import { TestCase } from "./testCase";

export interface Test {
  id: number;
  ticketId: string;
  qaStatus: string;
  date: string;
  version: string;
  observations: string;
  testCase: TestCase;
}
