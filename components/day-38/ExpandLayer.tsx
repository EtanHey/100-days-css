"use client";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
const ExpandLayer = ({
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
      onClick={() => {
        if (clicked) {
          return;
        }
        setClicked((p) => !p);
      }}
      className={`logo relative flex  bg-clip-content transition-all duration-500 ease-in ${
        clicked
          ? "scale-[4.75] ease-out md:scale-[7.125] lg:scale-950"
          : "scale-50 ease-in md:scale-75 lg:scale-100"
      }`}
    >
      {children}
    </span>
  );
};

export default ExpandLayer;
