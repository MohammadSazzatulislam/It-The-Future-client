import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import LeftSideNav from "../component/Courses/LeftSideNav";
import { UserAuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { useState } from "react";

const Header = () => {

  const [toggle, setToggle] = useState(false)

  const { user, logOutUser } = useContext(UserAuthContext);

  const handleLogOut = () => {
    logOutUser();
     toast.success("successfully log out");
  };

 

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
          <nav
            tabIndex={0}
            className="menu menu-compact font-semibold dropdown-content mt-5 gap-3 p-4 shadow bg-base-100 rounded-sm w-screen"
          >
            <Link to="/home">home</Link>

            <Link to="/courses">Courses</Link>

            <Link to="/blog">Blog</Link>

            <Link to="/faq">FAQ</Link>

            <p className="lg:hidden ">
              <LeftSideNav></LeftSideNav>
            </p>
          </nav>
        </div>
        <div className="flex justify-between gap-3 items-center">
          <Link to="/">
            <p className=" font-bold p-1 text-xl ">IT The Future</p>
          </Link>
          <input
            type="checkbox"
            className="toggle"
        
            checked
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold">
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
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        {user?.uid ? (
          <div className="flex justify-between items-center">
            <label
              tabIndex={0}
              data-tip={user?.displayName}
              className="btn btn-ghost btn-circle mr-3 flex justify-center items-center tooltip tooltip-left avatar "
            >
              <div data-tip="hello" className="w-10 rounded-full ">
                {user?.photoURL ? (
                  <img alt="profile picture" src={user?.photoURL} />
                ) : (
                  <div className="flex justify-center items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </label>
            <Link to="/">
              <button
                onClick={handleLogOut}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold border-none rounded-sm "
              >
                Log Out
              </button>
            </Link>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
