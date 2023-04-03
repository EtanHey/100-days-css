import AbsoluteFrame from "@/components/AbsoluteFrame";
import TotalDay44 from "@/components/day-44/TotalDay44";
import React from "react";

const page = () => {
  return (
    <AbsoluteFrame className={`rounded-sm bg-[#222] shadow-fortyThreeFrame`}>
      <TotalDay44 />
    </AbsoluteFrame>
  );
};

export default page;
