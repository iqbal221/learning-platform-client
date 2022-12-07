import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import FAQ from "../../Pages/FAQ/FAQ";
import Blogs from "../../Pages/Blogs/Blogs";
import Secret from "../../Pages/Secret/Secret";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://mern-stack-server-seven.vercel.app/coursesCard"),
      },
      {
        path: "/coursesCategory/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(
            `https://mern-stack-server-seven.vercel.app/coursesCategory/${params.id}`
          ),
      },

      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <div>This is Not found</div>,
  },
]);
