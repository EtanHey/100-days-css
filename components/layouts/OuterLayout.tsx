import React, { ReactNode } from "react";

const OuterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="scrollbar-none flex h-fit min-h-full w-full flex-col place-content-center place-items-center justify-items-center overflow-y-scroll text-center">
      <main className="w-full">{children}</main>
    </section>
  );
};

export default OuterLayout;
