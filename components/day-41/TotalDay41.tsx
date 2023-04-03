"use client";
import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
import InfoIcon from "./InfoIcon";
import AbsoluteFrame from "../AbsoluteFrame";
import { openSans } from "@/fonts";

const TotalDay41 = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClicked = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AbsoluteFrame
      centered={true}
      className={`bg-[#3F3F3F] shadow-thirtyEighthFrame ${openSans.className}`}
    >
      <ErrorModal {...{ handleClicked, isOpen }} />
      <div
        className={`absolute bottom-[6px] left-[6px] rounded-md  bg-41st-day-red py-1 px-2 shadow-fortyDayFrame md:bottom-[9px] md:left-[9px] md:py-1.5 md:px-3 lg:bottom-3 lg:left-3 lg:py-2 lg:px-4 ${
          isOpen ? "animate-hideErrorPopup" : "animate-showErrorPopup"
        }`}
      >
        <div className="flex items-center gap-x-2 fill-white font-bold">
          <h3>1 Error</h3>
          <span
            className="cursor-pointer rounded-full"
            onClick={() => handleClicked()}
          >
            <InfoIcon />
          </span>
        </div>
      </div>
    </AbsoluteFrame>
  );
};

export default TotalDay41;
