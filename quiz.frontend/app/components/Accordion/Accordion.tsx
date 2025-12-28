import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center border-b-1 p-2 cursor-pointer">
        <p>{title}</p>
        <button onClick={() => setIsOpen(!isOpen)}>
          <ChevronDown
            className={`inline-block ml-1 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} p-2`}>{children}</div>
    </>
  );
};

export default Accordion;
