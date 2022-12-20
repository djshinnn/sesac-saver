import React from "react";
import { Link } from "react-router-dom";

import { navbarData } from "./navbardata";

const Navbar = () => {
  return (
    <ul className="navbar">
      {navbarData.map((nav) => (
        <li className="navbar__list" key={nav.id}>
          <Link to={nav.path}>{nav.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
