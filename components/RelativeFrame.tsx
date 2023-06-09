import React, { ReactNode } from "react";

const RelativeFrame = ({ children }: { children: ReactNode }) => {
  return <span className={`relative h-[400px] w-[400px]`}>{children}</span>;
};

export default RelativeFrame;
