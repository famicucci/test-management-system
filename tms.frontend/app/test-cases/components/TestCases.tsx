"use client";

import { IconButton } from "@/components/IconButton";
import { Table } from "@/components/Table";
import useTestCase from "@/store/testCase/testCase";
import { useEffect } from "react";
import { Trash } from "react-feather";

const TestCases = () => {
  const { testCases, fetchTestCases, status } = useTestCase();

  useEffect(() => {
    fetchTestCases();
  }, [fetchTestCases]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading test cases</div>;
  }

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
    {
      id: "actions",
      name: "Actions",
      cell: (row: any) => (
        <IconButton
          variant="secondary"
          size="medium"
          onClick={() => console.log("Edit", row.id)}
        >
          <Trash size={20} />
        </IconButton>
      ),
    },
  ];

  return <Table data={testCases} columns={columns} />;
};

export default TestCases;
