import React, { ReactNode } from "react";

const RelativeFrame = ({ children }: { children: ReactNode }) => {
  return (
    <span className={`relative sm:h-[400px] sm:w-[400px]`}>{children}</span>
  );
};

export default RelativeFrame;
