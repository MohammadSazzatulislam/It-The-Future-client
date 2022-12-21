import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog/Blog";
import Courses from "../component/Courses/Courses";
import Details from "../component/Courses/Details";
import Faq from "../component/Faq/Faq";
import Home from "../component/Home/Home";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage";
import LogIn from "../Shared/LogIn";
import SignUp from "../Shared/SignUp";
import CheckOut from "../component/Courses/CheckOut";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/details/:id",
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
        element: <Details></Details>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout/:id",
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

// https://it-the-future.vercel.app
