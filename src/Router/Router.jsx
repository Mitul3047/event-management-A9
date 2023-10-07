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


const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Error></Error>,
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            
            {
                path:'/eventdetails/:id',
                element:<EventDetails></EventDetails>,
                loader: () => fetch('/eventData.json')
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>,
                loader: () => fetch('/eventData.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
        ]
    }
])
export default router;