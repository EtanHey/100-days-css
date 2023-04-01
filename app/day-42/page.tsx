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
          <StarsStateProvider />
      </Window>
    </GenericFrame>
  );
};

export default page;
