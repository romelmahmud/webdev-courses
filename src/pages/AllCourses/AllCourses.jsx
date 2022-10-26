import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../Layout/Container/Container";
import CoursesContainer from "./CoursesContainer";
import Sidebar from "./Sidebar";
const AllCourses = () => {
  const [courses, setCourses] = useState(useLoaderData());
  return (
    <div className="py-14">
      <Container>
        <div className="flex w-full flex-col-reverse md:flex-row justify-between">
          <CoursesContainer courses={courses} />
          <Sidebar />
        </div>
      </Container>
    </div>
  );
};

export default AllCourses;
