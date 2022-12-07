import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import CoursesCard from "../CoursesCard/CoursesCard";

const Home = () => {
  const Courses = useLoaderData();

  return (
    <div>
      <Header></Header>
      <div className="py-10">
        <h2 className="text-4xl font-bold text-center mb-5">Our Courses</h2>
        <div className="grid grid-cold-1 md:grid-cols-3 gap-4 ">
          {Courses?.map((course) => (
            <CoursesCard key={course.id} course={course}></CoursesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
