import GenericFrame from "@/components/GenericFrame";
import StarsStateProvider from "@/components/day-42/StarsStateProvider";
import Window from "@/components/day-42/Window";
import { openSans } from "@/fonts";
import React from "react";

const page = () => {
  return (
    <GenericFrame
      className={`bg-white shadow-fortyTwoFrame ${openSans.className}`}
    >
      <Window>
        <div className="stars-father relative h-full w-full rounded-full bg-gradient-to-b from-[#1d4253] to-[#6bb5c4]">
          <StarsStateProvider />
        </div>
      </Window>
    </GenericFrame>
  );
};

export default page;
