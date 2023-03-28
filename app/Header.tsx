import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex h-fit w-full flex-row items-center bg-[#6B329F] px-3 py-4 font-bold text-white">
      <nav className="center">
        <ul className="flex flex-wrap items-center justify-center gap-y-2">
          <li>
            <Link href="/" className="px-3  py-1 text-sm uppercase">
              Home
            </Link>
          </li>
          <li>
            <Link href="/day-1" className="px-3 py-1 text-sm uppercase">
              Day 1
            </Link>
          </li>
          <li>
            <Link href="/day-38" className="px-3 py-1 text-sm uppercase">
              Day 38
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
