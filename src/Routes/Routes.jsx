import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import MyAppointments from "../Pages/Dashboard/MyAppointments/MyAppointments";
import TestResults from "../Pages/Dashboard/TestResults/TestResults";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path:"/login",
                element: <Login></Login>
            }
        ]
    },

    {
        path:"dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:"myProfile",
                element: <MyProfile></MyProfile>
            },
            {
                path:"myAppointments",
                element: <MyAppointments></MyAppointments>
            },
            {
                path:"textResults",
                element: <TestResults></TestResults>
            }
        ]
    }
])

export default router ;