import React from "react";

const Zero = ({ second }: { second?: boolean }) => {
  return (
    <span
      className={`
      ${second ? " z-[6] sm:left-[100px]" : " z-[8] sm:left-[17px]"} 
       absolute top-0 rounded-full border-solid border-white shadow-firstDayTip sm:h-[100px] sm:w-[100px] sm:border-24`}
    ></span>
  );
};

export default Zero;
