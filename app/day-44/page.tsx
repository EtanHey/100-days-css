import GenericFrame from "@/components/GenericFrame";
import SquareProvider from "@/components/day-44/SquareProvider";
import React from "react";

const page = () => {
  return (
    <GenericFrame className={`bg-[#222] shadow-fortyThreeFrame rounded-sm`}>
      <SquareProvider />
    </GenericFrame>
  );
};

export default page;
