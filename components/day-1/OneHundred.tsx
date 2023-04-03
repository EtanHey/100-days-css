import React from "react";
import One from "./One";
import Zero from "./Zero";

const OneHundred = () => {
  return (
    <div className="number relative h-[50px] w-[100px] md:h-[75px] md:w-[150px] lg:h-[100px] lg:w-[200px]">
      <One />
      <Zero />
      <Zero second={true} />
    </div>
  );
};

export default OneHundred;
