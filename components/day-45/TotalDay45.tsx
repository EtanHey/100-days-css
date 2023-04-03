"use client";

import { useState } from "react";

const TotalDay45 = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="absolute top-1/2 left-1/2 h-[63.4px] w-45 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-[#5CA4EA] uppercase outline outline-[0.5px] outline-white transition-colors duration-700">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="absolute inset-1/2 flex h-[calc(100%-2px)] w-[calc(100%-2px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center text-lg font-light tracking-[1px] text-[#fff] text-opacity-80 antialiased transition-colors duration-700 hover:bg-[#4F95DA]"
      >
        hover me
      </button>
      {/* hover-line */}
      <svg
        className={`absolute right-0 top-0 -z-50 h-full w-full translate-x-0 translate-y-0  transition-all duration-[800ms] ease-in-out`}
        width="180"
        height="63.4"
        strokeDasharray={`40 500`}
        strokeDashoffset={hovered ? -500 : 40}
        stroke="white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="180,0 179,62.9 0.5,62.9 0.5,0.5 179.5,0" />
      </svg>
    </div>
  );
};

export default TotalDay45;
