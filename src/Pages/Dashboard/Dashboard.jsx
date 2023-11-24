import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    return (
        <div className="flex gap-7">

            <div className="bg-zinc-400 w-64 min-h-screen">
             <ul className="text-center mx-auto pt-10 space-y-8">
               
            <li> 
                <NavLink to="/dashboard/myProfile"
                className={({isActive})=>
                isActive ? "bg-blue-200 p-2 px-16 rounded-md" : " border-2 p-2 px-16"
            }
            >   MyProfile</NavLink> </li>
               
            <li> 
                <NavLink to="/dashboard/myAppointments"
                className={({isActive})=>
                isActive ? "bg-blue-200 p-2 px-10  rounded-md " : "border-2 p-2 px-10 "
            }
            >   MyAppointments</NavLink> </li>
            <li> 
                <NavLink to="/dashboard/textResults"
                className={({isActive})=>
                isActive ? "bg-blue-200 p-2 px-16  rounded-md " : "border-2 p-2 px-16 "
            }
            >  Test Results</NavLink> </li>
            <li> 
                <NavLink to="/"
                className={({isActive})=>
                isActive ? "bg-blue-200 p-2 px-16  rounded-md " : "border-2 p-2 px-16 "
            }
            >  Home</NavLink> </li>

             </ul>
            </div>
          
            <div className=" flex-1 pt-6">
                <Outlet>
              

                </Outlet>
            </div>
        </div>
    );
};

export default Dashboard;