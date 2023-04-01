import React from "react";

const Star = () => {
  const delay = Math.ceil(50+Math.random() * 100) / 10;
  const duration = Math.ceil(Math.random() * 80 + 20) / 10;
  return (
    <span
      style={{
        left: `${Math.random() * 280}px`,
        top: `${Math.random() * 280}px`,
        animation: `${delay}s flicker ${duration}s infinite`,
      }}
      className={`absolute h-px w-px rounded-full bg-[#fff]`}
    ></span>
  );
};

//
export default Star;
