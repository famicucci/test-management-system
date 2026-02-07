"use client";
import React from "react";
import Tests from "./components/Tests";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";

const Page = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <Typography variant="h3">Tests</Typography>
        <div>
          <Button onClick={() => {}}>Crear Test</Button>
        </div>
      </div>
      <Tests />
    </div>
  );
};

export default Page;
