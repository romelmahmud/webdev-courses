import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Container from "../../Layout/Container/Container";

const Checkout = () => {
  const [success, setSuccess] = useState(false);
  const course = useLoaderData();
  const {
    course_title,
    course_details,

    course_imgUrl,
  } = course;
  return (
    <Container>
      <div className="min-h-screen">
        <div className="py-6 px-4 mt-24 pb-8 bg-slate-50 shadow-md dark:bg-gray-800 rounded-md ">
          {!success && (
            <>
              <h1 className="text-4xl font-semibold text-blue-700 dark:text-gray-100 text-center">
                {course_title}
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-around mt-8">
                <div className=" w-3/5 md:w-1/3">
                  <img
                    src={course_imgUrl}
                    alt=""
                    className="rounded-md mb-6 md:mb-0"
                  />
                </div>
                <div className="w-3/5">
                  <p className="text-lg mb-6">{course_details}</p>
                  <button
                    onClick={() => setSuccess(true)}
                    className="bg-blue-700 py-3 px-5 text-white text-xl font-semibold rounded dark:text-white"
                  >
                    Get This Course
                  </button>
                </div>
              </div>
            </>
          )}
          {success && (
            <>
              <h1 className="text-4xl font-semibold text-blue-700 dark:text-gray-100 text-center">
                Congratulation!!! Welcome to the course
              </h1>

              <Link to={"/courses"}>
                {" "}
                <button className="bg-blue-700 py-3 px-5 text-white text-xl font-semibold rounded dark:text-white">
                  More Course
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
