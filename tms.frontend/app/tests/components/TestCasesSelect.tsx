import { SearcheableSelect } from "@/components/SearchableSelect";
import useTestCase from "@/store/testCase/testCase";
import { useEffect, useState } from "react";

const TestCasesSelect = () => {
  const { testCases, fetchTestCases } = useTestCase();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTestCases(search);
  }, [fetchTestCases, search]);

  return (
    <SearcheableSelect
      options={testCases.map((tc) => ({
        value: tc.id.toString(),
        label: tc.title,
      }))}
      onChange={(e) => {
        setTimeout(() => {
          setSearch(e.target.value);
        }, 1500);
      }}
      onSelect={() => {}}
      onVisible={async () => {}}
      hasMore={false}
    />
  );
};

export default TestCasesSelect;
