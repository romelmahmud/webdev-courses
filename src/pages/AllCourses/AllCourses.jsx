import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../Layout/Container/Container";
import CoursesContainer from "./CoursesContainer";
import Sidebar from "./Sidebar";
const AllCourses = () => {
  const [courses, setCourses] = useState(useLoaderData());
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useEffect(() => {
    fetch("https://webdev-courses-romelmahmud.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="py-14">
      <Container>
        <div className="flex w-full flex-col-reverse md:flex-row justify-between items-start">
          <CoursesContainer courses={courses} />
          <Sidebar categories={categories} />
        </div>
      </Container>
    </div>
  );
};

export default AllCourses;
