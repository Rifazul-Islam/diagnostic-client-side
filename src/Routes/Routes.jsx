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
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AllBanner from "../Pages/Dashboard/AllBanner/AllBanner";
import AddBanner from "../Pages/Dashboard/AddBanner/AddBanner";
import AllTest from "../Pages/AllTest/AllTest";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddTest from "../Pages/Dashboard/AddTest/AddTest";

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
            },
            {
                path:"/allTest",
                element: <AllTest></AllTest>
            }
        ]
    },

    {
        path:"dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
      {/** Admin Route Access */},

          {
              path:'adminHome',
              element: <AdminHome></AdminHome>
          },
          {
              path:'allUsers',
              element: <AllUsers></AllUsers>
          },
          {
              path:'addTest',
              element: <AddTest></AddTest>
          },
          {
              path:'allBanner',
              element: <AllBanner></AllBanner>
          },
          {
              path:'addBanner',
              element: <AddBanner></AddBanner>
          },
           
          {/** user Route Access */}
            ,
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