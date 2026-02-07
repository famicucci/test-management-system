export interface TestCase {
  id: number;
  category: string;
  title: string;
  steps: string;
  testData: string;
  expectedResult: string;
  platform: string;
  priority: string;
}
