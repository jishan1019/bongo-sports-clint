import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../SecurityLayout/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <div className="navbar shadow-sm bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost hidden md:block pt-[0.7rem] normal-case text-xl font-bold">
            Bongo Sports Acadamy
          </a>
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to="/instractor"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Instractor
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Classes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost md:hidden normal-case text-xl font-bold">
            Bongo Sports Acadamy
          </a>

          <ul className="md:inline-flex space-x-4 hidden">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/dashboard/home"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Dashboard
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/instractor"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Instractor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Classes
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="w-10 rounded-full">
            <img className="rounded-full" src={user && user?.photoURL} />
          </div>

          {user ? (
            <button
              onClick={logout}
              className="btn hidden md:block btn-ghost normal-case text-[15px] bg_primary ml-4"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="btn hidden md:block btn-ghost normal-case pt-4 text-[15px] bg_primary ml-4"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
