import React from "react";

const Zero = ({ second }: { second?: boolean }) => {
  return (
    <span
      className={`
      ${second ? " left-[100px] z-[6]" : " left-[17px] z-[8]"} 
       absolute top-0 h-[100px] w-[100px] rounded-full border-24 border-solid border-white shadow-firstDayTip`}
    ></span>
  );
};

export default Zero;
