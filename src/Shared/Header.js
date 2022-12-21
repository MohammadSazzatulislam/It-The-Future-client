import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import LeftSideNav from "../component/Courses/LeftSideNav";
import { UserAuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import img from  '../logo.png';

const Header = () => {

  const [toggle, setToggle] = useState(false)

  const { user, logOutUser } = useContext(UserAuthContext);

  useEffect(() => {
    return
  }, [toggle]);

    const handleToggle = () => {
      if (toggle === false) {
        setToggle(true)
      }
      else {
        setToggle(false)
      }
    };

  const handleLogOut = () => {
    logOutUser();
     toast.success("successfully log out");
  };


  return (
    <div className="navbar">
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
            className="menu menu-compact font-semibold dropdown-content mt-2 gap-3 p-4 bg-base-100 w-64"
          >
            <NavLink to="/home">home</NavLink>

            <NavLink to="/courses">Courses</NavLink>

            <NavLink to="/blog">Blog</NavLink>

            <NavLink to="/faq">FAQ</NavLink>

            <p className="lg:hidden ">
              <LeftSideNav></LeftSideNav>
            </p>
          </nav>
        </div>
        <div className="flex  flex-grow justify-between gap-3 items-center">
          <NavLink
            to="/"
            className="flex lg:w-fit justify-around items-center gap-2"
          >
            <div className="hidden lg:inline text-white md:inline">
              <img
                className="w-14 rounded-tl-3xl rounded-br-3xl bg-white border-green-400 border-2 "
                src={img}
                alt=""
              />
            </div>
            <p className=" font-bold p-1 text-xl ">IT The Future</p>
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold">
          <li>
            <NavLink to="/home">home</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-1">
        <div className="flex justify-between items-center gap-1">
          <input onClick={handleToggle} type="checkbox" className="toggle " />
          {toggle === true ? (
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-zinc-900  mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </p>
          ) : (
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5  mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </p>
          )}
        </div>
        {user?.uid ? (
          <div className="flex justify-between items-center">
            <label
              tabIndex={0}
              data-tip={user?.displayName}
              className="btn btn-ghost btn-circle mr-3 flex justify-center items-center tooltip tooltip-left avatar "
            >
              {user?.photoURL ? (
                <img
                  className="w-10 border border-gray-400 rounded-full"
                  alt=""
                  src={user?.photoURL}
                />
              ) : (
                <div className="flex w-10 rounded-full justify-center items-center mt-2">
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
            </label>
            <NavLink to="/">
              <button
                onClick={handleLogOut}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold border-none rounded-sm "
              >
                Log Out
              </button>
            </NavLink>
          </div>
        ) : (
          <>
            <NavLink to="/login">
              <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold border-none rounded-sm ">
                Log In
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
