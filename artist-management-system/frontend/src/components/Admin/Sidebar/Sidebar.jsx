import React from "react";
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

  const handleLogout = () => {
    localStorage.removeItem("aurora_token");
    navigate("/admin");
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <Link to="/">
          <img src={logo} alt="Aurora Entertainment" />
        </Link>
      </div>

      <ul className="sidebar-nav-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink to={item.path}>{item.label}</NavLink>
          </li>
        ))}
      </ul>

      <div className="logout">
        <a onClick={handleLogout}>Logout</a>
      </div>
    </div>
  );
}

export default Sidebar;
