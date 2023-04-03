import React from "react";
import One from "./One";
import Zero from "./Zero";

const OneHundred = () => {
  return (
    <div className="number xs:h-[75px] xs:w-[150px] relative h-[50px] w-[100px] sm:h-[100px] sm:w-[200px]">
      <One />
      <Zero />
      <Zero second={true} />
    </div>
  );
};

export default OneHundred;
