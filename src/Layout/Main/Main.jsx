import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../shared";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
