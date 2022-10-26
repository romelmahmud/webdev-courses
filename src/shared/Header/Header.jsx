import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);

  let activeStyle = {
    color: "#22c55e",
  };
  return (
    <div className="bg-gray-900 h-24 text-white ">
      <div className="mx-auto max-w-6xl px-6 md:px-5 flex justify-between items-center h-full">
        <div className="flex items-center text-blue-500">
          <AcademicCapIcon className="h-10 w-10 mr-4" />
          <Link to="/home" className="font-extrabold text-3xl  ">
            WebDev Courses
          </Link>
        </div>

        <div className="md:hidden">
          {open && (
            <XMarkIcon
              className="h-8 w-8 hover:text-green-500 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          )}
          {!open && (
            <Bars3Icon
              onClick={() => setOpen(!open)}
              className="h-8 w-8 hover:text-green-500 cursor-pointer "
            />
          )}
        </div>
        <nav className="hidden md:block">
          <ul className="md:flex">
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="ml-6 text-xl  font-semibold hover:text-green-500 transition-all duration-300 ease-in-out"
                to={"home"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="ml-6 text-xl font-semibold hover:text-green-500 transition-all duration-300 ease-in-out"
                to={"topics"}
              >
                Topics
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="ml-6 text-xl font-semibold hover:text-green-500 transition-all duration-300 ease-in-out"
                to={"statistics"}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="ml-6 text-xl font-semibold hover:text-green-500 transition-all duration-300 ease-in-out"
                to={"blog"}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* Mobile nav menu */}
        <nav
          className={`md:hidden absolute bg-slate-900 w-full pb-5 left-0 text-center transition-all  duration-500 ease-in-out ${
            open ? "top-24" : "top-[-320px]"
          }`}
        >
          <ul className="">
            <li className="my-4">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="my-6 text-xl  font-semibold hover:text-green-500 transition-all duration-300 ease-in-out"
                to={"home"}
              >
                Home
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="my-6 text-xl font-semibold hover:text-green-500 transition-all duration-300 ease-in-out"
                to={"topics"}
              >
                Topics
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="my-6 text-xl font-semibold hover:text-green-500 transition-all duration-300 ease-in-out"
                to={"statistics"}
              >
                Statistics
              </NavLink>
            </li>
            <li className="my-4">
              {" "}
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="text-xl font-semibold hover:text-green-500 transition-all duration-300 ease-in-out"
                to={"blog"}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
