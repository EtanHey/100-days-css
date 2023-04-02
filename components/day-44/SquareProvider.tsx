"use client";
import { useState } from "react";
import Square from "./Square";

const SquareProvider = () => {
  const squares = Array.from({ length: 20 }, (_, i) => i);
  const [play, setPlay] = useState(true);
  return (
    <div
      onMouseEnter={() => setPlay(false)}
      onMouseLeave={() => setPlay(true)}
      className="relative h-full w-full overflow-clip antialiased grayscale"
    >
      {squares.map((_, index) => (
        <Square key={index} index={index} play={play} />
      ))}
    </div>
  );
};

export default SquareProvider;
