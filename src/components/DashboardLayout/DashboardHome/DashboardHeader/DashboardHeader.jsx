import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../../AllLayout/ShareLayout/Loader/Loader";
import useUserRole from "../../../CustomHook/useUserRole";

const DashboardHeader = () => {
  const userRole = useUserRole();

  if (userRole?.isLoading) {
    return <Loader />;
  }

  if (userRole?.error) {
    return (
      <div className="flex justify-center items-center h-screen">
        Error: {error.message}
      </div>
    );
  }

  return (
    <section>
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

            {userRole?.userRole === "student" && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60 z-50 relative"
              >
                <li>
                  <Link to="/dashboard/home">Student Home</Link>
                </li>

                <li>
                  <Link to="/dashboard/my_select_calss">My Select Class</Link>
                </li>

                <li>
                  <Link to="/dashboard/my_enroll_calss">My Enroll Class</Link>
                </li>

                <li>
                  <Link to="/dashboard/payment_history">Payment History</Link>
                </li>

                <div className="divider">OR</div>

                <li>
                  <Link to="/classes">Buy New Class</Link>
                </li>

                <li>
                  <Link to="/">Go to home</Link>
                </li>
              </ul>
            )}

            {userRole?.userRole === "instractor" && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60 z-50 relative"
              >
                <li>
                  <Link to="">Instractor Home</Link>
                </li>

                <li>
                  <Link to="">Add a Class</Link>
                </li>

                <li>
                  <Link to="">My Add Classes</Link>
                </li>

                <div className="divider">OR</div>

                <li>
                  <Link to="/">Go to home</Link>
                </li>
              </ul>
            )}

            {userRole?.userRole === "admin" && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60 z-50 relative"
              >
                <li>
                  <Link to="">Admin Home</Link>
                </li>

                <li>
                  <Link to="">Manage Classes</Link>
                </li>

                <li>
                  <Link to="">Manage Users</Link>
                </li>

                <div className="divider">OR</div>

                <li>
                  <Link to="/">Go to home</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeader;
