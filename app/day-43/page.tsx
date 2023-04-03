import AbsoluteFrame from "@/components/AbsoluteFrame";
import LightStateProvider from "@/components/day-43/LightStateProvider";
import { openSans } from "@/fonts";
import React from "react";

const page = () => {
  return (
    <AbsoluteFrame
      className={`bg-[#404556] shadow-fortyThreeFrame transition-all duration-500 ease-in-out ${openSans.className}`}
    >
      <LightStateProvider />
    </AbsoluteFrame>
  );
};

export default page;
