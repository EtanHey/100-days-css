import React from "react";
import SmallTriangle from "./SmallTriangle";
import SmallCoveringCircle from "./SmallCoveringCircle";

const Triangle = ({ side }: { side: "left" | "right" }) => {
  return (
    
    <span
      className={` relative h-0 w-0  border-t-40 border-b-40  border-t-transparent border-b-transparent
      ${side === "left" ? "border-r-72" : "border-l-72"}
      ${side === "left" ? "border-r-white" : "border-l-white"}
      `}
    >
    </span>
  );
};

export default Triangle;
