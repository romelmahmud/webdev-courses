import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../shared";

const Main = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
