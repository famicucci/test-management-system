import { Table } from "@/components/Table";
import { TestCase } from "@/interfaces/testCase";

const TestCases = () => {
  const data: TestCase[] = [
    {
      id: 1,
      category: "Login",
      title: "Valid Login",
      steps:
        "1. Go to login page\n2. Enter valid credentials\n3. Click login button",
      testData: "Username: user1, Password: pass123",
      expectedResult: "User should be logged in successfully",
      platform: "Web",
      priority: "High",
    },
  ];

  const columns = [
    {
      id: "id",
      name: "ID",
      selector: "id",
    },
    {
      id: "category",
      name: "Category",
      selector: "category",
    },
    {
      id: "title",
      name: "Title",
      selector: "title",
    },
    {
      id: "steps",
      name: "Steps",
      selector: "steps",
    },
    {
      id: "testData",
      name: "Test Data",
      selector: "testData",
    },
    {
      id: "expectedResult",
      name: "Expected Result",
      selector: "expectedResult",
    },
    {
      id: "platform",
      name: "Platform",
      selector: "platform",
    },
    {
      id: "priority",
      name: "Priority",
      selector: "priority",
    },
  ];

  return <Table data={data} columns={columns} />;
};

export default TestCases;
