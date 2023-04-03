import { courierNewBold } from "@/fonts";
import React from "react";

const Text = () => {
  return (
    <>
      <h1
        className={`relative  uppercase sm:mt-[6px] sm:text-7.5xl sm:leading-[60px] ${courierNewBold.className}`}
      >
        Days
      </h1>
      <p
        className={`leading-[20px] sm:text-[23px] sm:tracking-wider ${courierNewBold.className}`}
      >
        CSS Challenge
      </p>
    </>
  );
};

export default Text;
