import React from "react";

const SmallTriangle = ({ side }: { side: "left" | "right" }) => {
  return (
    <span
      className={` h-0 w-0  border-t-40 border-b-40  border-t-transparent border-b-transparent
      ${side === "left" ? "border-r-72" : "border-l-72"}
      ${side === "left" ? "border-r-[#9B59B6]" : "border-l-[#9B59B6]"}
      `}
    ></span>
  );
};

export default SmallTriangle;
