import React from "react";

const CoveringCircle = ({ side }: { side: "left" | "right" }) => {
  return (
    <span
    onClick={(ev) => ev.stopPropagation()}

      className={`
       z-20 h-18 w-18 rounded-full bg-[#9B59B6] 
       ${side === "left" ? "-translate-x-4.5/12" : "translate-x-4.5/12"}
       `}
       />
       );
      };
      
export default CoveringCircle;
