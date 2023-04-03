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
      className={`GenericFrame xs:-mt-[150px] xs:-ml-[150px] xs:h-[300px] xs:w-[300px] absolute top-1/2 left-1/2 -mt-[100px] -ml-[100px] h-[200px] w-[200px] overflow-hidden rounded-md text-white sm:-mt-[200px] sm:-ml-[200px] sm:h-[400px] sm:w-[400px]
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
