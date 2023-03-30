import React from "react";

const Line = ({
  whichAmI,
  clicked,
}: {
  whichAmI: "top" | "bottom";
  clicked?: boolean;
}) => {
  return (
    <div
      className={`h-1 w-13 bg-white ${
        clicked !== undefined
          ? clicked === true
            ? whichAmI === "top"
              ? "animate-expandTop"
              : "animate-expandBottom"
            : whichAmI === "top"
            ? "animate-contractTop"
            : "animate-contractBottom"
          : ""
      }`}
    />
  );
};

export default Line;
