import AbsoluteFrame from "@/components/AbsoluteFrame";
import TotalDay41 from "@/components/day-41/TotalDay41";
import { openSans } from "@/fonts";
import React from "react";

const page = () => {
  return (
    <AbsoluteFrame
      className={`bg-[#3F3F3F] shadow-thirtyEighthFrame ${openSans.className}`}
    >
      <TotalDay41 />
    </AbsoluteFrame>
  );
};

export default page;
