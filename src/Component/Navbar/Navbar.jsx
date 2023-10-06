import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navlinks = (
    <>
      <li style={{ display: location.pathname !== "/" ? "block" : "none" }}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li style={{ display: location.pathname !== "/about" ? "block" : "none" }}>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
          }
        >
          About
        </NavLink>
      </li>

      

      <li style={{ display: location.pathname !== "/donation" ? "block" : "none" }}>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
          }
        >
          Donation
        </NavLink>
      </li>
      
      <li style={{ display: location.pathname !== "/login" ? "block" : "none" }}>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
          }
        >
          Join Now
        </NavLink>
      </li>
      <li style={{ display: location.pathname !== "/contact" ? "block" : "none" }}>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <a className=" font-bold normal-case text-2xl italic ">FestiveFusion</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold px-1">{navlinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
