import React from "react";

const Zero = ({ z, left }: { z?: number; left?: string }) => {
  return (
    <span
      className={`
      ${left ? `left-[${left}]` : "left-[17px]"} 
      ${z ? `z-[${z}]` : "z-[8]"}
       absolute top-0  box-border h-[100px] w-[100px] rounded-full border-24 border-solid border-white shadow-firstDayTip`}
    ></span>
  );
};

export default Zero;
