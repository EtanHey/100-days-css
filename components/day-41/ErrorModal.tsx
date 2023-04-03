import React from "react";
import WarningSVG from "./WarningSVG";

const ErrorModal = ({
  isOpen,
  handleClicked,
}: {
  isOpen: boolean;
  handleClicked: () => void;
}) => {
  return (
    <div
      className={`absolute rounded-sm antialiased shadow-fortyOneModal transition-all duration-300 sm:left-15 sm:top-23 sm:h-53 sm:w-74 ${
        isOpen ? "animate-openModal" : "animate-closeModal"
      }`}
    >
      <div className="flex h-full flex-col justify-between rounded-sm bg-white text-black">
        <div className="flex grow flex-col items-center justify-around sm:mt-6 sm:px-7.5">
          <WarningSVG />
          <main className={"flex flex-col sm:gap-y-1.5"}>
            <h1 className="sm:text-lg sm:leading-6">Oh snap!</h1>
            <p className="font-light text-[#415868] sm:text-sm sm:leading-[19px] ">
              An error has occurred while creating an error report.
            </p>
          </main>
        </div>
        <button
          onClick={handleClicked}
          className="w-full rounded-b-sm bg-41st-day-red capitalize text-white sm:h-10 sm:text-lg sm:leading-6"
        >
          dismiss
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
