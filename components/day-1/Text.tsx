import { courierNewBold } from "@/fonts";
import React from "react";

const Text = () => {
  return (
    <>
      <h1
        className={`xs:mt-[4.5px] xs:text-[61.5px] xs:leading-[45px] relative mt-[3px] text-[41px] uppercase leading-[30px] sm:mt-[6px] sm:text-7.5xl sm:leading-[60px] ${courierNewBold.className}`}
      >
        Days
      </h1>
      <p
        className={`xs:text-[17.25px] xs:tracking-[0.6px] text-[11.5px] leading-[20px] tracking-[0.4px] sm:text-[23px] sm:tracking-wider ${courierNewBold.className}`}
      >
        CSS Challenge
      </p>
    </>
  );
};

export default Text;
