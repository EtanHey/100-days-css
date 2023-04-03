import React, { ReactNode } from "react";

const AbsoluteFrame = ({
  children,
  className,
  centered,
}: {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}) => {
  return (
    <div
      className={`GenericFrame  absolute top-1/2 left-1/2  overflow-hidden rounded-md text-white sm:-mt-[200px] sm:-ml-[200px] sm:h-[400px] sm:w-[400px]
      ${className}`}
    >
      {centered ? (
        <div className="center absolute top-[50%] left-[50%] h-0 min-h-full w-full -translate-y-1/2 -translate-x-1/2">
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default AbsoluteFrame;
