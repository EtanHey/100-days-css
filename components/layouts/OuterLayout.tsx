import React, { ReactNode } from "react";

const OuterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className=" flex h-full w-full flex-col place-content-center place-items-center justify-items-center overflow-hidden text-center"
    >
      <section className=" h-0 min-h-full overflow-y-scroll w-full flex flex-col">{children}</section>
    </main>
  );
};

export default OuterLayout;
