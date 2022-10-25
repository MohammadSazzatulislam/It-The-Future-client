import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog/Blog";
import Courses from "../component/Courses/Courses";
import Faq from "../component/Faq/Faq";
import Home from "../component/Home/Home";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/faq',
                element: <Faq></Faq>,
            },
        ]
        
    }
])