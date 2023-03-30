"use client";
import React, { BaseSyntheticEvent, useState } from "react";
import WarningSVG from "./WarningSVG";

const StatefulError = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClicked = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`absolute left-15 top-23 h-53 w-74 rounded-sm antialiased shadow-FortyOneModal transition-all duration-300 ${
        isOpen ? "animate-openModal" : "animate-closeModal"
      }`}
    >
      <div className="flex h-full flex-col justify-between rounded-sm bg-white text-black">
        <div className="mt-6 flex grow flex-col items-center justify-around px-7.5">
          <WarningSVG />
          <main className={"flex flex-col gap-y-1.5"}>
            <h1 className="text-lg leading-6">Oh snap!</h1>
            <p className="text-sm font-light leading-[19px] text-[#415868] ">
              An error has occurred while creating an error report.
            </p>
          </main>
        </div>
        <button
          onClick={handleClicked}
          className="min-h-10 h-10 w-full rounded-b-sm bg-[#F65656] capitalize text-white"
        >
          dismiss
        </button>
      </div>
    </div>
  );
};

export default StatefulError;
