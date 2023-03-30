import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({
  menu,
  closeMenu,
}: {
  menu: boolean;
  closeMenu: () => void;
}) => {
  return (
    <div className="absolute flex flex-col items-center gap-4">
      <ul
        className={` flex flex-row  gap-x-8 font-semibold uppercase transition-all duration-500 ${
          menu ? "opacity-100" : " pointer-events-none opacity-0"
        }`}
      >
        <MenuItem {...{ closeMenu, title: "Home" }} />
        <MenuItem {...{ closeMenu, title: "Work" }} />
        <MenuItem {...{ closeMenu, title: "Life" }} />
        <MenuItem {...{ closeMenu, title: "Spirit" }} />
      </ul>
    </div>
  );
};

export default Menu;
export { MenuItem };
