import React, { ReactNode } from "react";

const OuterLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <main className=" flex h-full w-full flex-col place-content-center place-items-center justify-items-center overflow-hidden text-center">
      <section
        className={`scrollbar-none  flex h-0 min-h-full w-full flex-col overflow-y-scroll ${className}`}
      >
        {children}
      </section>
    </main>
  );
};

export default OuterLayout;
