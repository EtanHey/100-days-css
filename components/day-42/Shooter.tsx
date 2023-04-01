import Image from "next/image";
import React from "react";

const Shooter = () => {
  const delay = Math.ceil(Math.random() * 6) + 20;
  const duration = Math.ceil(Math.random() * 250) / 10;
  return (
    <div className={`-left-30 w-30 absolute h-0.5 rounded-full`}>
      <Image
        src={"https://100dayscss.com/codepen/shooting-star.png"}
        alt="shooting star"
        style={{
          top: `${Math.random() * 100 - 30}px`,
          animation: `${delay}s shoot ${duration}s infinite`,
        }}
        fill={true}
      ></Image>
    </div>
  );
};

//
export default Shooter;
