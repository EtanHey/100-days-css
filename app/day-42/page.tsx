import AbsoluteFrame from "@/components/AbsoluteFrame";
import TotalDay42 from "@/components/day-42/TotalDay42";
import Window from "@/components/day-42/Window";
import { openSans } from "@/fonts";
import React from "react";

const page = () => {
  return (
    <AbsoluteFrame
      className={`bg-white shadow-fortyTwoFrame ${openSans.className}`}
    >
      <Window>
        <TotalDay42 />
      </Window>
    </AbsoluteFrame>
  );
};

export default page;
