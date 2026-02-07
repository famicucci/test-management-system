import { ReactNode } from "react";

export interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: { left: number; top: number; width: number };
}
