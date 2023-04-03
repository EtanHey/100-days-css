import React, { ReactNode } from "react";

const Window = ({ children }: { children: ReactNode }) => {
  return (
    <div className="absolute left-1/2 top-1/2 h-74 w-74 -translate-x-1/2 -translate-y-1/2 bg-white sm:scale-100">
      {children}
    </div>
  );
};

export default Window;
