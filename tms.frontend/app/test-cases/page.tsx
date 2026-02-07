"use client";
import React from "react";
import TestCases from "./components/TestCases";
import TestCaseForm from "./components/TestCaseForm";
import { useModal } from "@/contexts/ModalContext";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { ModalContent } from "@/components/Modal/ModalContent";

const Page = () => {
  const { show, hide } = useModal();

  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <Typography variant="h3">Test Cases</Typography>
        <div>
          <Button
            onClick={() =>
              show("Crear un Test Case", () => (
                <ModalContent>
                  <TestCaseForm onSubmit={() => hide()} />
                </ModalContent>
              ))
            }
          >
            Crear Test Case
          </Button>
        </div>
      </div>
      <TestCases />
    </div>
  );
};

export default Page;
