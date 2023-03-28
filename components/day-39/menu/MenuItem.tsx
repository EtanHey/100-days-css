import React from "react";

const MenuItem = ({
  title,
  closeMenu,
}: {
  title: string;
  closeMenu: () => void;
}) => {
  return (
    <li onClick={closeMenu} className="cursor-pointer hover:text-gray-300">
      {title}
    </li>
  );
};

export default MenuItem;
