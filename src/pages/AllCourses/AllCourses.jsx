import React, { useState, useEffect } from "react";
import Container from "../../Layout/Container/Container";
import CoursesContainer from "./CoursesContainer";
import Sidebar from "./Sidebar";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(courses);
  useEffect(() => {
    setLoading(true);
    fetch("https://webdev-courses-romelmahmud.vercel.app/categories/01")
      .then((res) => res.json())
      .then((data) => setCourses(data));
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch("https://webdev-courses-romelmahmud.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="py-14">
      <Container>
        <div className="flex w-full flex-col-reverse lg:flex-row justify-between items-start">
          <CoursesContainer courses={courses} loading={loading} />
          <Sidebar
            categories={categories}
            setCourses={setCourses}
            setLoading={setLoading}
          />
        </div>
      </Container>
    </div>
  );
};

export default AllCourses;
