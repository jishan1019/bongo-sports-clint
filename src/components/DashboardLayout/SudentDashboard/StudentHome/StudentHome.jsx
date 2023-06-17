import React from "react";
import { Link } from "react-router-dom";

const StudentHome = () => {
  return (
    <section>
      {/* <div className="dropdown">
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
            <a>Homepage</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div> */}

      <div className="navbar bg_secondary">
        <div className="navbar-start">
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
                d="M10 20v-6l-1-1-1 1v6h2zm4 0v-6l-1-1-1 1v6h2zm4 0v-6l-1-1-1 1v6h2V9.5L12 4 2 9.5V18h2v-6l1-1 1 1v6h6z"
              />
            </svg>
          </label>
        </div>
        <div className="navbar-center font-bold">
          <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
        </div>
        <div className="navbar-end ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60 bg_primary"
            >
              <li>
                <Link to="">Student Home</Link>
              </li>

              <li>
                <Link to="">My Select Class</Link>
              </li>

              <li>
                <Link to="">My Enroll Class</Link>
              </li>

              <li>
                <Link to="">Payment History</Link>
              </li>

              <div className="divider">OR</div>

              <li>
                <Link to="/classes">Buy New Class</Link>
              </li>

              <li>
                <Link to="/">Go to home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentHome;