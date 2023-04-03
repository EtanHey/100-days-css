import AbsoluteFrame from "@/components/AbsoluteFrame";
import ImageContainer from "@/components/day-40/ImageContainer";
import StatefulPics from "@/components/day-40/StatefulPics";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <AbsoluteFrame className=" shadow-fortyDayFrame">
      <StatefulPics />
    </AbsoluteFrame>
  );
};

export default page;
