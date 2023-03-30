import GenericFrame from "@/components/GenericFrame";
import StatefulError from "@/components/day-41/StatefulError";
import { openSans } from "@/fonts";
import React from "react";

const page = () => {
  return (
    <GenericFrame
      className={`bg-[#3F3F3F] shadow-thirtyEighthFrame ${openSans.className}`}
    >
      <StatefulError />
    </GenericFrame>
  );
};

export default page;
