import React from "react";

const Zero = ({ z = 8, left = 17 }: { z?: number; left?: number }) => {
  return (
    <span
      className={`absolute top-0 left-[${left}px] z-[${z}] box-border h-[100px] w-[100px] rounded-full border-24 border-solid border-white shadow-firstDayTip`}
    ></span>
  );
};

export default Zero;
