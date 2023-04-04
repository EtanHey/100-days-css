import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex sticky top-0 z-50 h-fit w-full flex-row items-center bg-[#6B329F] px-3 py-4 font-bold text-white">
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
          <li>
            <Link href="/day-39" className="px-3 py-1 text-sm uppercase">
              Day 39
            </Link>
          </li>
          <li>
            <Link href="/day-41" className="px-3 py-1 text-sm uppercase">
              Day 41
            </Link>
          </li>
          <li>
            <Link href="/day-42" className="px-3 py-1 text-sm uppercase">
              Day 42
            </Link>
          </li>
          <li>
            <Link href="/day-44" className="px-3 py-1 text-sm uppercase">
              Day 44
            </Link>
          </li>
          <li>
            <Link href="/day-45" className="px-3 py-1 text-sm uppercase">
              Day 45
            </Link>
          </li>
          <li>
            <Link href="/day-46" className="px-3 py-1 text-sm uppercase">
              Day 46
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
