import React from "react";
import CubeSide from "./CubeSide";

const Cube = () => {
  return (
    <div className="cube">
      {/* top */}
      <CubeSide className={"top"} />
      {/* bottom */}
      <CubeSide className={"bottom"} />
      {/* left */}
      <CubeSide className={"left"} />
      {/* right */}
      <CubeSide className={"right"} />
      {/* front */}
      <CubeSide className={"front"} />
      {/* back */}
      <CubeSide className={"back"} />
    </div>
  );
};

export default Cube;
