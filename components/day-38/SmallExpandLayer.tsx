"use client";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
const SmallExpandLayer = ({
  children,
  clicked,
  setClicked,
}: {
  children: ReactNode;
  clicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <span
      onClick={() => setClicked((p) => !p)}
      className={`logo absolute flex bg-clip-content transition-all duration-500  ${
        clicked
          ? "xs:scale-75 scale-50 ease-in sm:scale-100"
          : "scale-0 ease-out"
      }`}
    >
      {children}
    </span>
  );
};

export default SmallExpandLayer;
