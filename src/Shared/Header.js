import React from "react";
import { Link } from "react-router-dom";
import LeftSideNav from "../component/Courses/LeftSideNav";

const Header = () => {
  return (
    <div className="navbar bg-teal-500">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/faq">Faq</Link>
            </li>
            <li className="lg:hidden">
              <LeftSideNav></LeftSideNav>
            </li>
          </ul>
        </div>
        <Link to="/">
          <p className="flex flex-col gap-1 lg:flex-row text-left font-bold p-1 text-xl   ">
            IT <span>The Future</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/faq">Faq</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        {/* {user?.uid ? (
            <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold border-none rounded-sm ">
              Log Out
            </button>
          ) : (
            <>
              <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold border-none rounded-sm ">
                Sign Up
              </button>
              <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold border-none rounded-sm ">
                Log In
              </button>
            </>
          )} */}

        <Link to="/signup">
          <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold border-none rounded-sm ">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold border-none rounded-sm ">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
