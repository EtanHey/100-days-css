"use client";
import React, { useState } from "react";
import CoveringCircle from "./CoveringCircle";
import ExpandLayer from "./ExpandLayer";
import Triangle from "./Triangle";
import SmallCoveringCircle from "./SmallCoveringCircle";
import SmallTriangle from "./SmallTriangle";
import SmallExpandLayer from "./SmallExpandLayer";

const StateProvider = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <span className="absolute top-1/2 left-1/2 -ml-[200px] -mt-[200px] flex h-[400px] w-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#9B59B6] text-white shadow-thirtyEighthFrame">
      <ExpandLayer clicked={clicked} setClicked={setClicked}>
        <CoveringCircle side="left" />
        <Triangle side="left" />
        <Triangle side="right" />
        <CoveringCircle side="right" />
      </ExpandLayer>
      <SmallExpandLayer clicked={clicked} setClicked={setClicked}>
        <SmallCoveringCircle side="left" />
        <SmallTriangle side="left" />
        <SmallTriangle side="right" />
        <SmallCoveringCircle side="right" />
      </SmallExpandLayer>
    </span>
  );
};

export default StateProvider;
