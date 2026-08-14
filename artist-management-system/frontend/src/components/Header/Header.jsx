import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const closeMenu = () => setOpenMenu(false);

  return (
    <header>
      <nav>
        <div
          className={`close-btn ${openMenu ? "active" : ""}`}
          onClick={closeMenu}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className={`nav-links ${openMenu ? "active" : ""}`}>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/notice" onClick={closeMenu}>
              NOTICE
            </NavLink>
          </li>
          <li>
            <NavLink to="/artists" onClick={closeMenu}>
              ARTISTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              CONTACT
            </NavLink>
          </li>
        </ul>
        <div className="hamburger" onClick={() => setOpenMenu(true)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
