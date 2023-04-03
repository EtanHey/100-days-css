import AbsoluteFrame from "@/components/AbsoluteFrame";
import TotalDay45 from "@/components/day-45/TotalDay45";
import { openSans } from "@/fonts";
import React from "react";

const page = () => {
  return (
    <AbsoluteFrame
      centered={true}
      className={`rounded-md bg-[#5CA4EA]  shadow-fortyThreeFrame  ${openSans.className}`}
    >
      <TotalDay45 />
    </AbsoluteFrame>
  );
};

export default page;
