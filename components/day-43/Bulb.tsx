import React from "react";

const Bulb = () => {
  return (
    <span className="absolute left-1/2 top-1/2 flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 flex-col">
      {/* top */}
      <span className="relative h-[93.5px] w-19 ">
        {/* glow */}
        <span className=" absolute top-0 block h-19 w-full rounded-full bg-[#FFF35C] shadow-fortyThreeBulbGlow" />
        {/* glass */}
        <div
          className={`relative h-19 w-19 rounded-full bg-transparent  backdrop-blur-xl backdrop-brightness-110 backdrop-grayscale backdrop-opacity-100`}
        >
          {/* left bottom triangle */}
          <div className="absolute bottom-1/3 right-1/2 block h-1/4 w-0 translate-x-1/3 translate-y-1/3 rotate-90  -skew-y-12 -skew-x-12 rounded-full rounded-t-none border-l-38 border-b-[48px] border-t-0 border-r-38  border-l-transparent border-r-transparent bg-transparent backdrop-blur-xl backdrop-brightness-110 backdrop-grayscale backdrop-opacity-100" />
          <div className="absolute bottom-1/3 left-1/2 block h-1/4 w-0 -translate-x-1/3 translate-y-1/3 -rotate-90  skew-y-12 skew-x-12 rounded-full rounded-t-none border-l-38 border-b-[48px] border-t-0 border-r-38 border-l-transparent border-r-transparent bg-transparent backdrop-blur-xl backdrop-brightness-110 backdrop-grayscale backdrop-opacity-100" />
          {/* curve */}
          <div className="absolute bottom-0 left-1/2 h-full w-9 -translate-x-1/2 rounded-t-full bg-transparent backdrop-blur-xl backdrop-brightness-110 backdrop-grayscale backdrop-opacity-100" />
          {/* <div
          className="absolute bottom-0 left-1/2 h-full w-9 -translate-x-1/2 rounded-t-full bg-transparent backdrop-brightness-200
          "
        /> */}
        </div>
      </span>
      {/* bottom */}
      <span className="relative h-[33px] w-8">
        {/* first metal */}
        {/* first metal */}
        {/* first metal */}
      </span>
    </span>
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
