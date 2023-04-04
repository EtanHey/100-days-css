"use client";
import React, { useState } from "react";
import MenuButton from "./menu-button/Index";
import Menu from "./menu";
import AbsoluteFrame from "../AbsoluteFrame";

const TotalDay39 = () => {
  const [clicked, setClicked] = useState<boolean>();
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
    <AbsoluteFrame
      centered={true}
      className="bg-[#4a617a]  shadow-firstDayFrame"
    >
      <div className="relative flex h-full w-full scale-100 place-items-center justify-center ">
        <MenuButton {...{ clicked, closeMenu, openMenu }} />
        <Menu {...{ closeMenu, menu }} />
      </div>
    </AbsoluteFrame>
  );
};

export default TotalDay39;
