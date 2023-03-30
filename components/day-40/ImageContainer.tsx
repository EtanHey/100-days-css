"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useTransition } from "react";

const ImageContainer = ({
  number,
}: {
  number: number;
}) => {
  return (
    <div
      data-num={number}
      className={`
      inset-0 min-h-fit min-w-fit origin-center cursor-pointer object-contain transition-all duration-300
       `}
    >
      <Image
        src={`https://100dayscss.com/codepen/40-${number}.jpg`}
        data-num={number}
        alt={`Day 40 pic #${number}`}
        width="128"
        height="128"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`relative inset-0 origin-center transition-all duration-300 ${""}`}
      />
    </div>
  );
};

export default ImageContainer;
