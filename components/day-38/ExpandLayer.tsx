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
          ? "ease-out sm:scale-950"
          : "ease-in sm:scale-100"
      }`}
    >
      {children}
    </span>
  );
};

export default ExpandLayer;
