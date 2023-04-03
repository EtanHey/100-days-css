"use client";
import { useState } from "react";
import Square from "./Square";


const TotalDay44 = () => {
  const squares = Array.from({ length: 20 }, (_, i) => i);
  const [play, setPlay] = useState(true);
  return (
      <div
        onMouseEnter={() => setPlay(false)}
        onMouseLeave={() => setPlay(true)}
        className="xs:scale-75 relative h-full w-full scale-50 overflow-clip antialiased grayscale sm:scale-100"
      >
        {squares.map((_, index) => (
          <Square key={index} index={index} play={play} />
        ))}
      </div>
  );
};

export default TotalDay44;
