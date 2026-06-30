import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="src\\assets\\logo.png" alt="" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/notice">NOTICE</NavLink>
          </li>
          <li>
            <NavLink to="/artists">ARTISTS</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
        <div className="hamburger">
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
