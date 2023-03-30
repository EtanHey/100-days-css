import GenericFrame from "@/components/GenericFrame";
import StateProvider from "@/components/day-39/StateProvider";
import React from "react";

const page = () => {
  return (
    <GenericFrame className="bg-[#4a617a] shadow-firstDayFrame">
      <StateProvider />
    </GenericFrame>
  );
};

export default page;
