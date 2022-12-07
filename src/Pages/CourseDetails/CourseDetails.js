import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";
import PDF from "../../Others/PDF/PDF";
import Test from "../../Others/PDF/PDF";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { title, image, description, features } = courseDetails;

  const handleDownload = () => {
    <Test></Test>;
    console.log("hello");
  };
  return (
    <div className="mt-10 mb-10">
      <div className="card w-full bg-base-100 shadow-xl px-3 py-5">
        <div className="card-body ">
          <h2 className="card-title mb-5 text-3xl">{title}</h2>

          <p>{description}</p>
        </div>
        <figure className="w-4/5 mx-auto my-5 ">
          <img src={image} alt="..." className="rounded" />
        </figure>
        <div className="md:mx-12 mx-5">
          <h3 className="text-center text-warning font-bold text-2xl mt-5 mb-3">
            Cover Follow Topics in This Course
          </h3>
          {features?.map((feature) => (
            <p className="mb-3 border-2 p-3 bg-gray flex items-center">
              <FaHandPointRight className="mr-2" />
              {feature}
            </p>
          ))}
          <Link to="/secret">
            <button className="btn btn-active btn-info text-white my-3">
              Get Premium Access
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
