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
        clicked ? "scale-100 ease-in" : "scale-0 ease-out"
      }`}
    >
      {children}
    </span>
  );
};

export default SmallExpandLayer;
