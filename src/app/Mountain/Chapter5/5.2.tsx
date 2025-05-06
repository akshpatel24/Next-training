import { TreeContext } from "@/app/layout";
import { useContext } from "react";
import { useState } from "react";
function Arrayprint() {
  const result = useContext(TreeContext);

  return (
    <>
      {result.map((item:[], i:number) => (
        <p key={i}>{item}</p>
      ))}
    </>
  );
}

