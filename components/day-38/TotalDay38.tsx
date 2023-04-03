"use client";
import React, { useState } from "react";
import CoveringCircle from "./CoveringCircle";
import ExpandLayer from "./ExpandLayer";
import SmallCoveringCircle from "./SmallCoveringCircle";
import SmallExpandLayer from "./SmallExpandLayer";
import BigRhombus from "./BigRhombus";
import SmallRhombus from "./SmallRhombus";

const StateProvider = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <span className="absolute top-1/2 left-1/2 -ml-[50%] -mt-[50%] flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#9B59B6] text-white shadow-thirtyEighthFrame ">
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
  );
};

export default StateProvider;
