import React, { useEffect, useRef, useState } from "react";

const useDropdownPosition = (isOpen: boolean) => {
  const dropdownAnchorRef = useRef<HTMLDivElement>(null);
  const [dropdownRect, setDropdownRect] = useState<{
    left: number;
    top: number;
    width: number;
  }>();

  useEffect(() => {
    if (isOpen && dropdownAnchorRef.current) {
      const rect = dropdownAnchorRef.current.getBoundingClientRect();
      setDropdownRect({
        left: rect.left,
        top: rect.bottom, // bottom for below the input
        width: rect.width,
      });
    }
  }, [isOpen]);

  return {
    dropdownRect,
    dropdownAnchorRef,
  };
};

export default useDropdownPosition;
