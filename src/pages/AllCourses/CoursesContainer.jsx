import React from "react";
import CourseCard from "./CourseCard";

const CoursesContainer = ({ courses, loading }) => {
  return (
    <div className="  w-full lg:w-3/4 grid lg:grid-cols-2  gap-5">
      {loading ? (
        <h1 className="text-2xl text-white">Loading</h1>
      ) : (
        courses?.map((course) => <CourseCard key={course.id} course={course} />)
      )}
    </div>
  );
};

export default CoursesContainer;
