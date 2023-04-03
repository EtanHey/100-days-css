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
      <div className="xs:scale-75 relative flex h-full w-full scale-50 place-items-center justify-center sm:scale-100 ">
        <MenuButton {...{ clicked, closeMenu, openMenu }} />
        <Menu {...{ closeMenu, menu }} />
      </div>
    </AbsoluteFrame>
  );
};

export default TotalDay39;
