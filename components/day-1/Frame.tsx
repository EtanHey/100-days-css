import React, { ReactNode } from "react";

const Frame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="frame absolute top-1/2 left-1/2 -mt-[50%] -ml-[50%] h-full w-full overflow-hidden rounded-md bg-gradient-to-bl from-[#4ec1c9] to-[#433ca0] text-white shadow-firstDayFrame">
      <div className="center absolute top-[50.8%] left-[50.5%] -translate-y-1/2 -translate-x-1/2">
        {children}
      </div>
    </div>
  );
};

export default Frame;
