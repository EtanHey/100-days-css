import React, { ReactNode } from "react";

const RelativeFrame = ({ children }: { children: ReactNode }) => {
  return (
    <span
      className={`relative h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]`}
    >
      {children}
    </span>
  );
};

export default RelativeFrame;
