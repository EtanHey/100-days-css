"use client";
import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
import InfoIcon from "./InfoIcon";

const StatefulError = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClicked = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ErrorModal {...{ handleClicked, isOpen }} />
      <div
        className={`absolute bottom-3 left-3 rounded-md bg-41st-day-red py-2 px-4 shadow-FortyDayFrame ${
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
    </>
  );
};

export default StatefulError;
