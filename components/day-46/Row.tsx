import React, { ReactNode } from "react";

const Row = ({
  children,
  rowIndex,
}: {
  children: ReactNode;
  rowIndex: number;
}) => {
  return (
    <div
      style={{
        animation: `inOut${rowIndex + 1} 6s ease-in-out alternate infinite`,
      }}
      className={`absolute left-[100px] top-[100px] h-[200px] w-[200px]`}
      key={rowIndex}
    >
      {children}
    </div>
  );
};

export default Row;
