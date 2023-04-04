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
      className={`absolute left-15 top-23 h-53 w-74 rounded-sm antialiased shadow-fortyOneModal transition-all duration-300 ${
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
          className="h-10 w-full rounded-b-sm bg-41st-day-red text-lg capitalize leading-6 text-white"
        >
          dismiss
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
