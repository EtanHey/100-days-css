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
      className={`xs:left-[45px] xs:top-[71.25px] xs:h-[157.5px] xs:w-[210px] absolute left-[30px] top-[47.5px] h-[105px] w-[140px] rounded-sm antialiased shadow-fortyOneModal transition-all duration-300 sm:left-15 sm:top-23 sm:h-53 sm:w-74 ${
        isOpen ? "animate-openModal" : "animate-closeModal"
      }`}
    >
      <div className="flex h-full flex-col justify-between rounded-sm bg-white text-black">
        <div className=" xs:mt-[18px] xs:px-[22.5px] mt-3 flex grow flex-col items-center justify-around px-[15px] sm:mt-6 sm:px-7.5">
          <WarningSVG />
          <main
            className={
              "xs:gap-y-[4.5px] flex flex-col gap-y-[3px] sm:gap-y-1.5"
            }
          >
            <h1 className="xs:text-[13.5px] xs:leading-[18px] text-[9px] leading-3 sm:text-lg sm:leading-6">
              Oh snap!
            </h1>
            <p className="xs:text-[10.5px] xs:leading-[14.25px] text-[7px] font-light leading-[9.5px] text-[#415868] sm:text-sm sm:leading-[19px] ">
              An error has occurred while creating an error report.
            </p>
          </main>
        </div>
        <button
          onClick={handleClicked}
          className="xs:h-[30px] xs:text-[13.5px] xs:leading-[18px] h-5 w-full rounded-b-sm bg-41st-day-red text-[9px] capitalize leading-3 text-white sm:h-10 sm:text-lg sm:leading-6"
        >
          dismiss
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
