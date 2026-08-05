import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to={"/add"}
      >
        Add
      </NavLink>
    </nav>
  );
}

export default NavBar;
