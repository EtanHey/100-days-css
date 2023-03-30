"use client";
import React, { BaseSyntheticEvent, useState } from "react";
import ImageContainer from "./ImageContainer";

const StatefulPics = () => {
  const pics: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [clicked, setClicked] = useState<number | 0 | -1>(-1);
  return (
    <div
      tabIndex={1}
      className=" flex h-full flex-wrap gap-1 p-1"
      onClick={(ev: BaseSyntheticEvent<any>) => {
        const number = ev.target.dataset.num;
        if (clicked !== -1 && clicked !== 0) {
          return setClicked(-1);
        }
        return setClicked(number);
      }}
    >
      {pics.map((number, index) => (
        <ImageContainer key={index} {...{ number, clicked }} />
      ))}
    </div>
  );
};

export default StatefulPics;
