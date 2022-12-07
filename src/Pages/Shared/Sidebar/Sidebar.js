import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [coursesCategory, setCoursesCategory] = useState([]);

  useEffect(() => {
    fetch("https://mern-stack-server-seven.vercel.app/coursesCategory")
      .then((res) => res.json())
      .then((data) => setCoursesCategory(data));
  }, []);

  return (
    <div>
      <h4 className="text-md font-bold text-center pb-3 pt-5">Our Courses</h4>
      {coursesCategory.map((courseCategory) => (
        <p key={courseCategory.id}>
          <Link to={`/coursesCategory/${courseCategory.id}`}>
            <button className="btn btn-outline rounded-none btn-success w-full mb-4">
              {courseCategory.course_name}
            </button>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Sidebar;
