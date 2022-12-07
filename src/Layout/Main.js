import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Sidebar from "../Pages/Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-row justify-center px-4 lg:px-16 md:px-4">
        <div className=" md:basis-1/4 pr-8 hidden md:block ">
          <Sidebar></Sidebar>
        </div>
        <div className=" md:basis-3/4">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
