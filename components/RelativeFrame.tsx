import React, { ReactNode } from "react";

const RelativeFrame = ({ children }: { children: ReactNode }) => {
  return (
    <span
      className={`xs:h-[300px] xs:w-[300px] relative h-[200px] w-[200px] sm:h-[400px] sm:w-[400px]`}
    >
      {children}
    </span>
  );
};

export default RelativeFrame;
