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
      className={`absolute left-[30px] top-[47.5px] h-[105px] w-[140px] rounded-sm antialiased shadow-fortyOneModal transition-all duration-300 md:left-[45px] md:top-[71.25px] md:h-[157.5px] md:w-[210px] lg:left-15 lg:top-23 lg:h-53 lg:w-74 ${
        isOpen ? "animate-openModal" : "animate-closeModal"
      }`}
    >
      <div className="flex h-full flex-col justify-between rounded-sm bg-white text-black">
        <div className=" mt-3 flex grow flex-col items-center justify-around px-[15px] md:mt-[18px] md:px-[22.5px] lg:mt-6 lg:px-7.5">
          <WarningSVG />
          <main
            className={
              "flex flex-col gap-y-[3px] md:gap-y-[4.5px] lg:gap-y-1.5"
            }
          >
            <h1 className="text-[9px] leading-3 md:text-[13.5px] md:leading-[18px] lg:text-lg lg:leading-6">
              Oh snap!
            </h1>
            <p className="text-[7px] font-light leading-[9.5px] text-[#415868] md:text-[10.5px] md:leading-[14.25px] lg:text-sm lg:leading-[19px] ">
              An error has occurred while creating an error report.
            </p>
          </main>
        </div>
        <button
          onClick={handleClicked}
          className="h-5 w-full rounded-b-sm bg-41st-day-red text-[9px] capitalize leading-3 text-white md:h-[30px] md:text-[13.5px] md:leading-[18px] lg:h-10 lg:text-lg lg:leading-6"
        >
          dismiss
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
