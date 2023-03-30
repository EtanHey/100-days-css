import React, { ReactNode } from "react";

const OuterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className="scrollbar-none flex h-fit min-h-full w-full flex-col place-content-center place-items-center justify-items-center overflow-y-scroll text-center"
    >
      <section className="h-full w-full">{children}</section>
    </main>
  );
};

export default OuterLayout;
