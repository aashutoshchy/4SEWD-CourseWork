import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav className="w-full bg-blue-300 h-[10vh]">
      <ul className="flex justify-around items-center w-full h-full">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `${isActive ? "text-red" : "text-black"} font-semibold hover:font-bold`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "text-red" : "text-black"} font-semibold hover:font-bold`
            }
            // className={(isActive) => `${isActive} ? "bg-red-500" : " `}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `${isActive ? "text-red" : "text-black"} font-semibold hover:font-bold`
            }
          >
            Add Form
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
