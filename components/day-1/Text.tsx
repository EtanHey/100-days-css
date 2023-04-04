import { courierNewBold } from "@/fonts";
import React from "react";

const Text = () => {
  return (
    <>
      <h1
        className={`relative  mt-[6px] text-7.5xl uppercase leading-[60px] ${courierNewBold.className}`}
      >
        Days
      </h1>
      <p
        className={`text-[23px] leading-[20px] tracking-wider ${courierNewBold.className}`}
      >
        CSS Challenge
      </p>
    </>
  );
};

export default Text;
