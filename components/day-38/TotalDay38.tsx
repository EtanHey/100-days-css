"use client";
import React, { useState } from "react";
import CoveringCircle from "./CoveringCircle";
import ExpandLayer from "./ExpandLayer";
import SmallCoveringCircle from "./SmallCoveringCircle";
import SmallExpandLayer from "./SmallExpandLayer";
import BigRhombus from "./BigRhombus";
import SmallRhombus from "./SmallRhombus";
import AbsoluteFrame from "../AbsoluteFrame";

const TotalDay38 = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <AbsoluteFrame className="rounded-md shadow-thirtyEighthFrame">
      <span className="absolute top-1/2 left-1/2 -ml-[50%] -mt-[50%] flex h-full w-full cursor-pointer items-center justify-center overflow-hidden bg-[#9B59B6] text-white">
        <ExpandLayer clicked={clicked} setClicked={setClicked}>
          <CoveringCircle side="left" />
          <BigRhombus />
          <CoveringCircle side="right" />
        </ExpandLayer>
        <SmallExpandLayer clicked={clicked} setClicked={setClicked}>
          <SmallCoveringCircle side="left" />
          <SmallRhombus />
          <SmallCoveringCircle side="right" />
        </SmallExpandLayer>
      </span>
    </AbsoluteFrame>
  );
};

export default TotalDay38;
