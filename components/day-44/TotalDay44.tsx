"use client";
import { useState } from "react";
import Square from "./Square";
import AbsoluteFrame from "../AbsoluteFrame";

const TotalDay44 = () => {
  const squares = Array.from({ length: 20 }, (_, i) => i);
  const [play, setPlay] = useState(true);
  return (
    <AbsoluteFrame
      centered={true}
      className={`rounded-sm bg-[#222]  shadow-fortyThreeFrame`}
    >
      <div
        onMouseEnter={() => setPlay(false)}
        onMouseLeave={() => setPlay(true)}
        className="relative scale-50 md:scale-75 lg:scale-100 h-full w-full overflow-clip antialiased grayscale"
      >
        {squares.map((_, index) => (
          <Square key={index} index={index} play={play} />
        ))}
      </div>
    </AbsoluteFrame>
  );
};

export default TotalDay44;
