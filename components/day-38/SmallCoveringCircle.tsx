import React from "react";

const SmallCoveringCircle = ({ side }: { side: "left" | "right" }) => {
  return (
    <span
      onClick={(ev) => ev.stopPropagation()}
      className={`
    z-20 h-17 w-17 translate-y-1 rounded-full bg-[white] 
   ${side === "left" ? "translate-x-2/3" : "-translate-x-2/3"}
   `}
    />
  );
};

export default SmallCoveringCircle;
