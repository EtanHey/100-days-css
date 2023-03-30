import React, { ReactNode } from "react";

const GenericFrame = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`GenericFrame absolute top-1/2 left-1/2 -mt-[200px] -ml-[200px] h-[400px] w-[400px] overflow-hidden rounded-md text-white
      ${className}`}
    >
      <div className="center absolute h-0 min-h-full w-full top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
        {children}
      </div>
    </div>
  );
};

export default GenericFrame;
