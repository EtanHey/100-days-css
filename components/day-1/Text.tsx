import { courierNewBold } from "@/fonts";
import React from "react";

const Text = () => {
  return (
    <>
      <h1
        className={`relative mt-[3px] uppercase leading-[30px] text-[41px] md:mt-[4.5px] md:text-[61.5px] md:leading-[45px] lg:mt-[6px] lg:text-7.5xl lg:leading-[60px] ${courierNewBold.className}`}
      >
        Days
      </h1>
      <p
        className={`text-[11.5px] leading-[20px] tracking-[0.4px] md:text-[17.25px] md:tracking-[0.6px] lg:text-[23px] lg:tracking-wider ${courierNewBold.className}`}
      >
        CSS Challenge
      </p>
    </>
  );
};

export default Text;
