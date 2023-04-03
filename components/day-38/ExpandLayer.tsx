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
          ? "xs:scale-[7.125] scale-[4.75] ease-out sm:scale-950"
          : "xs:scale-75 scale-50 ease-in sm:scale-100"
      }`}
    >
      {children}
    </span>
  );
};

export default ExpandLayer;
