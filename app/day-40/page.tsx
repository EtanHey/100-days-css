import GenericFrame from "@/components/GenericFrame";
import ImageContainer from "@/components/day-40/ImageContainer";
import StatefulPics from "@/components/day-40/StatefulPics";
import Image from "next/image";
import React from "react";

const page = () => {
  
  return (
    <GenericFrame className=" shadow-FortyDayFrame">
      <StatefulPics />
    </GenericFrame>
  );
};

export default page;
