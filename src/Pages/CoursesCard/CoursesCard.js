import React from "react";
import { Link } from "react-router-dom";

const CoursesCard = ({ course }) => {
  const { name, image, duration, price, id } = course;

  return (
    <div class="">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="h-40 w-full" alt="..." />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-between my-3">
            <div className="badge badge-outline w-30">
              duration:{duration} days
            </div>
            <div className="badge badge-outline w-30">price:${price}</div>
          </div>
          <div className="card-actions ">
            <button className="btn btn-primary w-full">
              <Link to={`/coursesCategory/${id}`}>Course Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
