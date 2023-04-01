import React, { useMemo } from "react";

const Star = () => {
  return (
    <span
      style={{
        left: `${Math.random() * 280}px`,
        top: `${Math.random() * 280}px`,
      }}
      className={`absolute h-px  w-px rounded-[1] bg-[#fff]`}
    ></span>
  );
};

export default Star;
