import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import Error from "../Pages/Eorror/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import EventDetails from "../Pages/EventDetails/EventDetails";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";


const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error></Error>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/eventdetails/:id',
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: () => fetch('/eventData.json')
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>,
                loader: () => fetch('/blog.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                loader: () => fetch('/eventData.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    }
])
export default router;