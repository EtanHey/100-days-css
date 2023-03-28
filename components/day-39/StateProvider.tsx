"use client";
import React, { useEffect, useState } from "react";

const StateProvider = () => {
  const [clicked, setClicked] = useState(false);
  const [menu, setMenu] = useState(false);
  const closeMenu = () => {
    setClicked(false);
    setMenu(false);
  };
  const openMenu = () => {
    setClicked(true);
    setTimeout(() => setMenu(true), 500);
  };
  return (
    <div className="relative flex h-full w-full place-items-center justify-center ">
      {/* Menu button */}
      <div
        onClick={clicked ? closeMenu : openMenu}
        className={`${
          clicked ? "" : "z-50"
        } flex h-fit w-fit cursor-pointer flex-col place-items-center justify-center gap-y-4 transition-all duration-500`}
      >
        {/* Menu lines */}
        <div
          className={`h-1 w-13 bg-white ${
            clicked ? "animate-expandTop" : "animate-contractTop"
          }`}
        />
        <div
          className={`h-1 w-13 bg-white ${
            clicked ? "animate-expandBottom" : "animate-contractBottom"
          }`}
        />
      </div>
      {/* Menu */}
      <div className="absolute flex flex-col items-center gap-4">
        <ul
          className={` flex flex-row  gap-x-8 font-semibold uppercase transition-all duration-500 ${
            menu ? "opacity-100" : " opacity-0"
          }`}
        >
          <li
            onClick={closeMenu}
            className="cursor-pointer hover:text-gray-300"
          >
            Home
          </li>
          <li
            onClick={closeMenu}
            className="cursor-pointer hover:text-gray-300"
          >
            Work
          </li>
          <li
            onClick={closeMenu}
            className="cursor-pointer hover:text-gray-300"
          >
            Life
          </li>
          <li
            onClick={closeMenu}
            className="cursor-pointer hover:text-gray-300"
          >
            Spirit
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StateProvider;
