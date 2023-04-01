import React from "react";

const Bulb = () => {
  return (
    <div className="relative mx-auto my-0 h-full w-full overflow-hidden">
      {/* glass */}
      <div
        className={`
      before:h-[30%] origin-[100%_100%] rotate-[6deg] skew-y-[217deg] rounded-tr-[30%_100%] before:absolute
      before:bottom-0 before:right-1/2 before:w-[70%] before:shadow-fortyThreeBulbBefore before:content-['']
      `}
      />
      {/* glow */}
      <span />
    </div>
  );
};

export default Bulb;

// .ghost:before {
//   bottom: 0;
//   right: 50%;
//   width: 70%;
//   height: 30%;
//   transform-origin: 100% 100%;
//   transform: skewY(217deg) rotate(6deg);
//   box-shadow: -100px -100px 0px 99px #656565;
//   border-top-right-radius: 30% 100%;
// }
// .ghost:before, .ghost:after {
//   content: '';
//   position: absolute;
// }
