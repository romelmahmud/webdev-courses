import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../Layout/Container/Container";
import {
  UserIcon,
  ChartBarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import CoursePdf from "./CoursePdf";

const CourseDetails = () => {
  const course = useLoaderData();
  const [showPdf, setShowPdf] = useState(false);
  const {
    course_title,
    category,
    course_imgUrl,
    course_description,
    course_features,
    instructor_info,
    rating,
    difficulty_level,
    total_students,
  } = course;
  return (
    <Container>
      {!showPdf ? (
        <>
          <div className="my-16 bg-white dark:bg-gray-800 py-8  px-10 rounded-md shadow-md border dark:border-none">
            <button
              onClick={() => setShowPdf(true)}
              className="bg-blue-700 py-2 px-3 rounded dark:text-white text-white"
            >
              Create Pdf
            </button>
            <h1 className="text-5xl text-center text-blue-700 dark:text-white mb-6 font-semibold py-6">
              {course_title}
            </h1>

            <div className="max-w-3xl mx-auto">
              <img
                src={course_imgUrl}
                alt={course_title}
                className="rounded-md"
              />
            </div>
            <div className="mt-10 ml-4 lg:ml-10 flex  lg:justify-around flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0">
                <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-1 lg:mb-3">
                  Instructor:
                </h3>
                <div className="flex items-center">
                  <img
                    src={instructor_info[0].imgUrl}
                    alt={instructor_info[0].name}
                    className="h-12 w-12 rounded-full  shadow-md"
                  />
                  <p className="text-xl font-semibold text-gray-800 dark:text-gray-100 ml-3">
                    {instructor_info[0].name}
                  </p>
                </div>
              </div>
              <div className="mb-6 lg:mb-0">
                <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-1 lg:mb-3">
                  Total Students:
                </h3>
                <div className="flex items-center">
                  <UserIcon className="h-6 w-6 text-blue-500" />
                  <p className="text-xl font-semibold text-gray-800 dark:text-gray-100 ml-2">
                    {total_students}+
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-1 lg:mb-3">
                  Difficulty level:
                </h3>
                <div className="flex items-center">
                  <ChartBarIcon className="h-6 w-6 text-blue-500" />
                  <p className="text-xl capitalize font-semibold text-gray-800 dark:text-gray-100 ml-2">
                    {difficulty_level}
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-4 lg:ml-10 lg:w-4/5 mt-16 ">
              <h3 className="text-2xl  text-blue-600 mb-3 font-semibold">
                Course Features:
              </h3>

              {course_features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex mt-4 p-4 items-center border rounded "
                >
                  <span className="w-10 mr-2">
                    <CheckCircleIcon className="h-6 w-6 text-blue-500" />
                  </span>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <div className="ml-4 lg:ml-10 lg:w-4/5 mt-16 mb-10 ">
              <h3 className="text-2xl  text-blue-600 mb-3 font-semibold">
                Course Description:
              </h3>
              <p className="text-xl">{course_description}</p>
            </div>
            <button className="ml-4 mb-6 lg:ml-10 bg-blue-800 hover:bg-blue-900 text-xl font-semibold py-4 px-6 rounded text-white transition-all duration-300 ease-in-out">
              Get Premium Access
            </button>
          </div>
        </>
      ) : (
        <CoursePdf course={course} />
      )}
    </Container>
  );
};

export default CourseDetails;
