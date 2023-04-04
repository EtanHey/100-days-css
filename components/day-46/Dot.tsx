import React from "react";

const Dot = ({
  dotIndex,
  rowIndex,
}: {
  dotIndex: number;
  rowIndex: number;
}) => {
  const radius = 100;
  const angle = 360 / 12;
  const rowsNullBase = rowIndex - 1;
  const opacity = 1 - rowsNullBase / 10;
  const nullBase = dotIndex - 1;
  let deg = `${nullBase * angle}deg`;
  return (
    <div
      style={{
        transform: `translate3d(0,${radius * -1}px,0) rotate(${deg})`,
        opacity,
      }}
      className={`absolute  top-[100px] left-[100px] h-[10px] w-[10px] origin-[0_100px] translate-y-[100px] rounded-[50px] bg-white`}
      key={dotIndex}
    />
  );
};

export default Dot;
