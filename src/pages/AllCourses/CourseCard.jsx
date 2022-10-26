import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";

const CourseCard = ({ course }) => {
  const {
    course_title,
    id,
    category,
    course_imgUrl,
    category_id,
    course_details,
    instructor_info,
    rating,
  } = course;
  return (
    <article className="overflow-hidden rounded-lg shadow-md transition hover:shadow-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white relative">
      <span class="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white">
        {rating} <StarIcon className="h-4 w-4 ml-1 text-yellow-400" />
      </span>
      <Link to={`/courses/${id}`}>
        <img
          alt="Office"
          src={course_imgUrl}
          className="h-56 w-full object-cover"
        />
      </Link>
      <div className=" p-4 sm:p-6 ">
        <div>
          <img
            src={instructor_info[0].imgUrl}
            alt={instructor_info[0].name}
            className="h-20 w-20 rounded-full mt-[-60px] shadow-md"
          />
          <span className="font-medium text-lg">{instructor_info[0].name}</span>
        </div>
        <div></div>
      </div>

      <div className=" p-4 sm:p-6 mt-[-30px]">
        <Link to={`/courses/${id}`}>
          <h3 className="mt-0.5 text-2xl text-blue-500 font-semibold">
            {course_title}
          </h3>
        </Link>

        <p className="mt-2 text-md leading-relaxed ">{course_details}</p>
      </div>
      <div className="p-4 sm:p-6 mt-[-30px]">
        <Link to={`/courses/${id}`}>
          <button className="py-2 px-4 bg-blue-600 rounded font-medium dark:text-white hover:bg-blue-700 transition-all duration-300 ease-in-out">
            Course Details
          </button>
        </Link>
      </div>
    </article>
  );
};

export default CourseCard;
