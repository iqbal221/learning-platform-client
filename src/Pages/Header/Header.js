import React from "react";

const Header = () => {
  return (
    <div className="header ">
      <div className="hero bg-base-200 ">
        <div className="hero-content rounded-lg rounded-t-none bg-gradient-to-r from-lime-500 to-blue-500 ...">
          <div className="w-full p-2 md:p-4 ">
            <h1 className="text-4xl text-white font-bold ">
              Mern stack web development course !!
            </h1>
            <p className="py-6">
              MERN stack is a collection of technologies that enables faster
              application development. It is used by developers worldwide. The
              main purpose of using MERN stack is to develop apps using
              JavaScript only. This is because the four technologies that make
              up the technology stack are all JS-based.
            </p>
            <div>
              <button className="btn btn-warning hover:btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
