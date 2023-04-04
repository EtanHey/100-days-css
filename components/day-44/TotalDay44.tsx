"use client";
import { useState } from "react";
import Square from "./Square";
import AbsoluteFrame from "../AbsoluteFrame";

const TotalDay44 = () => {
  const squares = Array.from({ length: 20 }, (_, i) => i);
  const [play, setPlay] = useState(true);
  return (
    <AbsoluteFrame className={`rounded-sm bg-[#222] shadow-fortyThreeFrame`}>
      <div
        onMouseEnter={() => setPlay(false)}
        onMouseLeave={() => setPlay(true)}
        className="relative h-full w-full scale-100 overflow-clip antialiased grayscale"
      >
        {squares.map((_, index) => (
          <Square key={index} index={index} play={play} />
        ))}
      </div>
    </AbsoluteFrame>
  );
};

export default TotalDay44;
