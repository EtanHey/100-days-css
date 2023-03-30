import React from "react";

const CoveringCircle = ({ side }: { side: "left" | "right" }) => {
  return (
    <span
    onClick={(ev) => ev.stopPropagation()}

      className={`
       z-20 h-17 w-17 rounded-full bg-[#9B59B6] translate-y-1
      ${side === "left" ? "translate-x-2/3" : "-translate-x-2/3"}
      `}
    />
  );
};

export default CoveringCircle;
