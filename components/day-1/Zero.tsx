import React from "react";

const Zero = ({ second }: { second?: boolean }) => {
  return (
    <span
      className={`
      ${
        second
          ? "xs:left-[75px] left-[50px] z-[6] sm:left-[100px]"
          : "xs:left-[12.75px] left-[8.5px] z-[8] sm:left-[17px]"
      } 
       xs:h-[75px] xs:w-[75px] xs:border-18 absolute top-0 box-border h-[50px] w-[50px] rounded-full border-12 border-solid border-white shadow-firstDayTip sm:h-[100px] sm:w-[100px] sm:border-24`}
    ></span>
  );
};

export default Zero;
