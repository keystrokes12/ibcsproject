import React from "react";
import NavbarLinks from "./NavbarLinks"

const MenuOverlay = ({ links }) => {
    return (
        <ul className="flex flex-col py-3 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavbarLinks href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
