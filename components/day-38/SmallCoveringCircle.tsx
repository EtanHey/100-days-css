import React from "react";

const SmallCoveringCircle = ({ side }: { side: "left" | "right" }) => {
  return (
    <span
      className={`
    z-20 h-17 w-17 rounded-full bg-[white] translate-y-1
   ${side === "left" ? "translate-x-2/3" : "-translate-x-2/3"}
   `}
    />
  );
};

export default SmallCoveringCircle;
