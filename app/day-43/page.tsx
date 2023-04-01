import GenericFrame from "@/components/GenericFrame";
import LightStateProvider from "@/components/day-43/LightStateProvider";
import { openSans } from "@/fonts";
import React from "react";

const page = () => {
  return (
    <GenericFrame
      className={`bg-[#404556] shadow-fortyThreeFrame transition-all duration-500 ease-in-out ${openSans.className}`}
    >
      <LightStateProvider />
    </GenericFrame>
  );
};

export default page;
