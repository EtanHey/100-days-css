import React from "react";

const WarningSVG = () => {
  return (
    <div className="xs:scale-75 relative h-fit w-fit scale-50 sm:scale-100">
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3  text-xl font-semibold text-white">
        !
      </p>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="43.0442477876px"
        height="38.000000px"
        viewBox="0 0 43.0442477876 38.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          className="fill-41st-day-red"
          transform="translate(0.000,38) scale(0.0033665,-0.0033643989)"
          stroke="none"
        >
          <path
            d="M6266 11289 c-200 -27 -402 -141 -536 -301 -38 -46 -432 -718 -1284
-2194 -3554 -6153 -4323 -7485 -4358 -7554 -61 -121 -81 -211 -81 -375 -1
-115 3 -154 21 -220 91 -327 350 -567 681 -629 75 -14 614 -16 5691 -16 5077
0 5616 2 5691 16 331 62 590 302 681 629 18 66 22 105 21 220 0 164 -20 254
-81 375 -21 41 -756 1317 -1633 2835 -877 1518 -2126 3680 -2775 4804 -817
1416 -1196 2063 -1234 2109 -112 134 -277 239 -445 283 -93 24 -256 32 -359
18z"
          />
        </g>
      </svg>
    </div>
  );
};

export default WarningSVG;
