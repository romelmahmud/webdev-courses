import React from "react";
import Container from "../../Layout/Container/Container";

const Faq = () => {
  return (
    <Container>
      <div className="min-h-screen">
        <div className="py-8 px-8 mt-24 border shadow-md  bg-slate-50 dark:bg-gray-800 rounded-md ">
          <h1 className="text-4xl font-semibold text-blue-700 dark:text-gray-100 text-center">
            {" "}
            I am a Complete Beginner? Are there any course for me?
          </h1>

          <p className="text-lg mt-6 mb-4">
            We have many Beginner friendly courses about web development. All
            courses page you will find them.In Every courses description is it
            specified difficulty level.{" "}
          </p>
        </div>
        <div className="py-8 px-8 mt-24 border shadow-md  bg-slate-50 dark:bg-gray-800 rounded-md ">
          <h1 className="text-4xl font-semibold text-blue-700 dark:text-gray-100 text-center">
            {" "}
            Do your Courses comes with Money Back guaranty?
          </h1>

          <p className="text-lg mt-6 mb-4">
            Yes we have 30 days Money Back Guaranty.
          </p>
        </div>
        <div className="py-8 px-8 mt-24 mb-20 border shadow-md  bg-slate-50 dark:bg-gray-800 rounded-md ">
          <h1 className="text-4xl font-semibold text-blue-700 dark:text-gray-100 text-center">
            {" "}
            Do I will get support Session or live solution if I stuck on
            something?
          </h1>

          <p className="text-lg mt-6 mb-4">
            All courses has a private message group, there every one help each
            other and all our instructor are also active there. If you stuck
            something they will help you with in 24 hrs.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Faq;
