"use client";
import React, { useState } from "react";
import MenuButton from "./menu-button/Index";
import Menu from "./menu";

const StateProvider = () => {
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
    <div className="relative flex h-full w-full place-items-center justify-center ">
      <MenuButton {...{ clicked, closeMenu, openMenu }} />
      <Menu {...{ closeMenu, menu }} />
    </div>
  );
};

export default StateProvider;
