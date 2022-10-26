import React from "react";
import { Link } from "react-router-dom";
import Container from "../../Layout/Container/Container";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Container>
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between py-5 ">
          <div>
            <p class="text-center text-xs text-gray-400 md:text-left">
              Copyright &copy; 2023. WebDev Courses. All rights reserved.
            </p>
          </div>
          <nav className="text-center mb-3 md:mb-0  ">
            <Link className="mx-2" to={"/faq"}>
              FAQ
            </Link>
            <Link className="mx-2" to={"/blog"}>
              Blog
            </Link>
            <Link className="mx-2" to={"/courses"}>
              AllCourses
            </Link>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
