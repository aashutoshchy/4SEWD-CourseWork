import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import logo from "../../../assets/logo.png";
import "./Sidebar.css";

const navItems = [
  { label: "Dashboard", path: "/admin/dashboard" },
  { label: "Artists", path: "/admin/artists" },
  { label: "Releases", path: "/admin/releases" },
  { label: "Notices", path: "/admin/notice" },
  { label: "Messages", path: "/admin/messages" },
];

function Sidebar() {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);
  const closeMenu = () => setOpenMenu(false);

  const handleLogout = () => {
    localStorage.removeItem("aurora_token");
    navigate("/admin");
  };

  return (
    <div className="sidebar-container">
      <div
        className={`close-btn ${openMenu ? "active" : ""}`}
        onClick={closeMenu}
      >
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="sidebar-logo">
        <Link to="/admin/dashboard">
          <img src={logo} alt="Aurora Entertainment" />
        </Link>
      </div>

      <ul className={`sidebar-nav-links ${openMenu ? "active" : ""}`}>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink onClick={closeMenu} to={item.path}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="logout">
        <a onClick={handleLogout}>Logout</a>
      </div>

      <div className="hamburger" onClick={() => setOpenMenu(true)}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Sidebar;
