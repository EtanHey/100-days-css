import React from "react";
import Line from "./Line";

const MenuButton = ({
  clicked,
  closeMenu,
  openMenu,
}: {
  clicked: boolean;
  closeMenu: () => void;
  openMenu: () => void;
}) => {
  return (
    <div
      onClick={clicked ? closeMenu : openMenu}
      className={`${
        clicked ? "" : "z-50"
      } flex h-fit w-fit cursor-pointer flex-col place-items-center justify-center gap-y-4 transition-all duration-500`}
    >
      <Line clicked={clicked} whichAmI="top" />
      <Line clicked={clicked} whichAmI="bottom" />
    </div>
  );
};

export default MenuButton;
export { Line };
