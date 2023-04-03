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
      className={`GenericFrame absolute top-1/2 left-1/2 -mt-[100px] -ml-[100px] h-[200px] w-[200px] overflow-hidden rounded-md text-white md:-mt-[150px] md:-ml-[150px] md:h-[300px] md:w-[300px] lg:-mt-[200px] lg:-ml-[200px] lg:h-[400px] lg:w-[400px]
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
