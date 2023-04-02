import React from "react";

const SmallCoveringCircle = ({ side }: { side: "left" | "right" }) => {
  return (
    <span
      onClick={(ev) => ev.stopPropagation()}
      className={`
    z-20 h-18 w-18 rounded-full bg-[white] 
   ${side === "left" ? "-translate-x-4.5/12" : "translate-x-4.5/12"}
   `}
    />
  );
};

export default SmallCoveringCircle;
