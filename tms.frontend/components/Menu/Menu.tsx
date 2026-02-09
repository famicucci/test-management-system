"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../Button";

const Menu = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log("Current pathname:", pathname);

  return (
    <div className="mr-2">
      <Button
        variant={pathname === "/tests" ? "tertiary" : "secondary"}
        className="mr-2"
        onClick={() => router.push("/tests")}
      >
        Tests
      </Button>
      <Button
        variant={pathname === "/test-cases" ? "tertiary" : "secondary"}
        onClick={() => router.push("/test-cases")}
      >
        Test Cases
      </Button>
    </div>
  );
};

export default Menu;
