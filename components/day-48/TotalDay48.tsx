"use client";
import AbsoluteFrame from "../AbsoluteFrame";
import CubeSide from "./CubeSide";

const TotalDay48 = () => {
  return (
    <AbsoluteFrame className={`Day48Frame`}>
      <div className="Day48center">
        {/* cube */}
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
      </div>
    </AbsoluteFrame>
  );
};

export default TotalDay48;
