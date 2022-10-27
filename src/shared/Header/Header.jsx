import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import ToggleButton from "./ToggleButton";
import Container from "../../Layout/Container/Container";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const logoutHandler = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  let activeStyle = {
    color: "rgb(59 130 246)",
  };
  return (
    <div className="bg-white  dark:bg-gray-900 h-24 dark:text-white text-gray-900  ">
      <Container>
        <div className=" flex justify-between items-center h-full">
          <div className="flex items-center text-blue-500">
            <AcademicCapIcon className="h-8 w-8 md:h-10 md:w-10 mr-3 md:mr-4" />
            <Link to="/home" className="font-extrabold md:text-2xl text-xl  ">
              WebDev Courses
            </Link>
          </div>

          <div className="lg:hidden">
            {open && (
              <XMarkIcon
                className="h-8 w-8 hover:text-blue-500 cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            )}
            {!open && (
              <Bars3Icon
                onClick={() => setOpen(!open)}
                className="h-8 w-8 hover:text-blue-500 cursor-pointer "
              />
            )}
          </div>
          <nav className="flex items-center">
            <ul className=" hidden lg:flex mr-10 ">
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="ml-6 text-lg  font-medium  hover:text-blue-500 transition-all duration-300 ease-in-out"
                  to={"home"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="ml-6 text-lg font-medium   hover:text-blue-500 transition-all duration-300 ease-in-out"
                  to={"/courses"}
                >
                  AllCourses
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="ml-6 text-lg font-medium  hover:text-blue-500 transition-all duration-300 ease-in-out"
                  to={"/faq"}
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="ml-6 text-lg font-medium  hover:text-blue-500 transition-all duration-300 ease-in-out"
                  to={"blog"}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            <ul className="flex  items-center">
              <li className="ml-2 text-lg  font-medium ">
                <ToggleButton />
              </li>

              {user?.uid ? (
                <>
                  <li className="ml-2 text-lg   hover:text-blue-500">
                    <img
                      src={user?.photoURL ? user.photoURL : "./avatar.png"}
                      alt={user?.displayName}
                      title={user?.displayName}
                      className="h-8 w-8 md:h-12 md:w-12 rounded-full cursor-pointer"
                    ></img>
                  </li>
                  <li
                    className="ml-4 text-lg hidden md:block  hover:text-blue-500 cursor-pointer"
                    onClick={logoutHandler}
                  >
                    Logout
                  </li>
                </>
              ) : (
                <li className="ml-4 text-lg   hover:text-blue-500">
                  <Link to={"/login"}>login</Link>
                </li>
              )}
            </ul>
          </nav>
          {/* Mobile nav menu */}
          <nav
            className={`md:hidden absolute bg-white dark:bg-slate-900 w-full pb-5 left-0 text-center transition-all  duration-500 ease-in-out ${
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
                  to={"/courses"}
                >
                  AllCourses
                </NavLink>
              </li>
              <li className="my-4">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="my-6 text-xl font-semibold hover:text-green-500 transition-all duration-300 ease-in-out"
                  to={"/faq"}
                >
                  FAQ
                </NavLink>
              </li>
              <li className="my-4">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="text-xl font-semibold hover:text-green-500 transition-all duration-300 ease-in-out"
                  to={"/blog"}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;
