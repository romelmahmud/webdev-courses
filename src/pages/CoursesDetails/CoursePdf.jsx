import React, { createRef } from "react";
import Pdf from "react-to-pdf";
import Container from "../../Layout/Container/Container";
const ref = createRef();
const options = {
  orientation: "landscape",
  unit: "in",
  format: [13, 7],
};

const CoursePdf = ({ course }) => {
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
    <>
      <Container>
        <div ref={ref} className="bg-gray-800 py-8 px-6">
          <Pdf targetRef={ref} filename="course_details.pdf" options={options}>
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                className="bg-blue-700 py-2 px-3 rounded dark:text-white text-white"
              >
                Download Pdf
              </button>
            )}
          </Pdf>
          <h1 className="text-3xl text-gray-100 text-center mb-6">
            {course_title}
          </h1>

          <div className="flex justify-around items-center">
            <div className="max-w-lg">
              <img src={course_imgUrl} alt={course_title} />
            </div>
            <div>
              <img
                src={instructor_info[0].imgUrl}
                alt={instructor_info[0].name}
                className="h-20 w-20 rounded-full"
              />
              <p className="text-2xl text-gray-200">
                {instructor_info[0].name}
                <p className="text-lg text-gray-400 ">Instructor</p>
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-2xl text-blue-600">Course Description:</p>
            <p className="text-lg text-gray-300">{course_description}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CoursePdf;
