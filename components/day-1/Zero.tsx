import React from "react";

const Zero = ({ second }: { second?: boolean }) => {
  return (
    <span
      className={`
      ${
        second
          ? "left-[50px] z-[6] md:left-[75px] lg:left-[100px]"
          : "left-[8.5px] z-[8] md:left-[12.75px] lg:left-[17px]"
      } 
       absolute top-0 box-border h-[50px] w-[50px] rounded-full border-12 border-solid border-white shadow-firstDayTip md:h-[75px] md:w-[75px] md:border-18 lg:h-[100px] lg:w-[100px] lg:border-24`}
    ></span>
  );
};

export default Zero;
