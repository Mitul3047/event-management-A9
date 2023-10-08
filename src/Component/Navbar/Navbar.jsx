import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const location = useLocation();

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then()
      .catch()
  }

  const navlinks = (
    <>
      <li style={{
        display: location.pathname !== "/" ? "block" : "none",
        color: location.pathname !== '/' ? '#a855f7ff' : 'white'
      }}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li style={{
        display: location.pathname !== "/about" ? "block" : "none",
        color: location.pathname !== '/' ? '#a855f7ff' : 'white'
      }}>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
          }
        >
          About
        </NavLink>
      </li>



      <li style={{
        display: location.pathname !== "/dashboard" ? "block" : "none",
        color: location.pathname !== '/' ? '#a855f7ff' : 'white'
      }}>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>

      {
        user ?
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn bg-purple-500 text-white hover:text-black font-semibold ">
              {
                user.displayName ? <p className=" ">{user.display}</p>
                  : <p className=" ">Welcome</p>
              }
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-purple-500 rounded-box w-52">
              {
                user.photoURL ? <img src={user.photoURL} alt="" />
                  :
                  ''
              }
              <li onClick={handleLogOut}><a>LogOut</a></li>
            </ul>
          </div>
          :
          <li style={{
            display: location.pathname !== "/login" ? "block" : "none",
            color: location.pathname !== '/' ? '#a855f7ff' : 'white'
          }}>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline" : ""
              }
            >
              Join Now
            </NavLink>
          </li>
      }
      <li style={{
        display: location.pathname !== "/contact" ? "block" : "none",
        color: location.pathname !== '/' ? '#a855f7ff' : 'white'
      }}>
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
            {
              navlinks
            }

          </ul>
        </div>
        <a className=" font-bold normal-case text-3xl italic ">FestiveFusion</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal text-white text-lg font-semibold px-1">
          {
            navlinks
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
