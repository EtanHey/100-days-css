"use client";
import { useState } from "react";
import AbsoluteFrame from "../AbsoluteFrame";

const TotalDay47 = () => {
  const checked = [
    130, 131, 149, 150, 151, 152, 168, 169, 170, 171, 172, 173, 187, 188, 190,
    191, 193, 194, 207, 208, 209, 210, 211, 212, 213, 214, 229, 232, 248, 250,
    251, 253, 267, 269, 272, 274,
  ];
  const [checks, setChecks] = useState(
    Array.from({ length: 400 }).map((_, index) =>
      checked.includes(index + 1) ? true : false
    )
  );
  return (
    <AbsoluteFrame
      className={`rounded-md bg-[#DE4738] shadow-fortyThreeFrame `}
    >
      {checks.map((bool, index) => (
        <div className="float-left" key={index}>
          <input
            type="checkbox"
            checked={bool}
            className="hidden"
            name={`${index}`}
            id={`${index}`}
            onChange={() => {
              let pastChecks = [...checks];
              pastChecks[index] = !bool;
              setChecks(pastChecks);
            }}
          />
          <label
            className={`box-border block h-5 w-5 cursor-pointer border  ${
              bool
                ? "border-white bg-white"
                : `border-[#E24E3F] hover:border-[#E24E3F]
            hover:bg-[#EC5142] `
            }`}
            htmlFor={`${index}`}
          />
        </div>
      ))}
    </AbsoluteFrame>
  );
};

export default TotalDay47;
