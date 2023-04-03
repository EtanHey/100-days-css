import AbsoluteFrame from "@/components/AbsoluteFrame";
import TotalDay39 from "@/components/day-39/TotalDay39";
import React from "react";

const page = () => {
  return (
    <AbsoluteFrame className="bg-[#4a617a] shadow-firstDayFrame">
      <TotalDay39 />
    </AbsoluteFrame>
  );
};

export default page;
