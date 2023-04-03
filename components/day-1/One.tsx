import React from "react";

const One = () => {
  return (
    <>
      <span className="the-one-tip z-1 absolute top-0 rotate-[50deg] rounded-[3px] bg-white shadow-firstDayTip -left-2 h-5 w-[10px] md:-left-3 md:h-[30px] md:w-[15px] lg:-left-4 lg:h-10 lg:w-5"></span>
      <span className="the-one-line absolute top-0 left-0 z-10 rounded-[3px] bg-white shadow-firstDayTip h-[50px] w-3 md:h-[75px] md:w-[18px] lg:h-[100px] lg:w-6"></span>
    </>
  );
};

export default One;
