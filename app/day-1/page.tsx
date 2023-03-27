import { Frame, One, Text, Zero } from "@/components/day-1";
import React from "react";

const page = () => {
  return (
    <Frame>
      <div className="number relative h-[100px] w-[200px]">
        <One />
        <Zero />
        <Zero left={"100px"} z={6} />
      </div>
      <Text />
    </Frame>
  );
};

export default page;
