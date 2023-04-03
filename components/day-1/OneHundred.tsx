import React from "react";
import One from "./One";
import Zero from "./Zero";

const OneHundred = () => {
  return (
    <div className="number relative sm:h-[100px] sm:w-[200px]">
      <One />
      <Zero />
      <Zero second={true} />
    </div>
  );
};

export default OneHundred;
