import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-white text-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Explore Best Web Dev Courses
              <span className="sm:block"> Get Hire Quickly </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
              We have more than 10+ courses about web development for all level
              (Beginner to Advance) and more are coming soon.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to={"/courses"}
                className="block w-3/5  rounded border-2 border-blue-700 bg-blue-700 px-8 md:px-12 py-3 text-lg font-medium text-white dark:text-white hover:bg-transparent hover:text-blue-800 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition-all duration-300 ease-in-out"
              >
                Get ALL Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
