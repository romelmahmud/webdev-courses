import React from "react";
import CourseCard from "./CourseCard";

const CoursesContainer = ({ courses }) => {
  return (
    <div className=" md:w-3/4 grid lg:grid-cols-2  gap-3">
      {courses?.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesContainer;
