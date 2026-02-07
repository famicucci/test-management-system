"use client";
import Tests from "./components/Tests";
import TestForm from "./components/TestForm";
import { useModal } from "@/contexts/ModalContext";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { ModalContent } from "@/components/Modal/ModalContent";

const Page = () => {
  const { show, hide } = useModal();

  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <Typography variant="h3">Tests</Typography>
        <div>
          <Button
            onClick={() =>
              show("Crear un Test", () => (
                <ModalContent>
                  <TestForm onSubmit={() => hide()} />
                </ModalContent>
              ))
            }
          >
            Crear Test
          </Button>
        </div>
      </div>
      <Tests />
    </div>
  );
};

export default Page;
