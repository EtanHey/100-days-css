"use client";
import React, { useState } from "react";

const StateProvider = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="relative flex h-full w-full place-items-center justify-center ">
      <div
        onClick={() => setClicked(!clicked)}
        className={`flex h-fit w-fit cursor-pointer flex-col place-items-center justify-center gap-y-4 transition-all duration-500`}
      >
        <div className={`h-1 w-13 bg-white ${clicked ? "opacity-0" : ""}`} />
        <div className={`h-1 w-13 bg-white ${clicked ? "opacity-0" : ""}`} />
      </div>
      <div className="absolute flex flex-col items-center gap-4">
        <div className={`h-0.5 w-76 bg-white ${clicked ? "opacity-0" : ""}`} />
        <ul
          className={`flex flex-row  gap-x-8 font-semibold uppercase transition-all duration-500 ${
            clicked ? "scale-0" : " scale-100"
          }`}
        >
          <li>Home</li>
          <li>Work</li>
          <li>Life</li>
          <li>Spirit</li>
        </ul>
        <div className={`h-0.5 w-76 bg-white ${clicked ? "opacity-0" : ""}`} />
      </div>
    </div>
  );
};

export default StateProvider;
