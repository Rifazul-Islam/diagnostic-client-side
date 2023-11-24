import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {
  const [isAdmin] = useAdmin()
    return (
        <div className="flex flex-col md:flex-row gap-7">

            <div className="bg-zinc-400 md:w-64 min-h-screen">
             <ul className="text-center mx-auto pt-10 space-y-8">


          {
            isAdmin ?  <>
             <li> 
            <NavLink to="/dashboard/adminHome"
            className={({isActive})=>
            isActive ? "bg-blue-200 p-2 px-16 rounded-md" : " border-2 p-2 px-16"
        }
        >  AdminHome</NavLink> </li>  

             <li> 
            <NavLink to="/dashboard/allBanner"
            className={({isActive})=>
            isActive ? "bg-blue-200 p-2 px-16 rounded-md" : " border-2 p-2 px-16"
        }
        >  AllBanner</NavLink> </li>  

             <li> 
            <NavLink to="/dashboard/addBanner"
            className={({isActive})=>
            isActive ? "bg-blue-200 p-2 px-16 rounded-md" : " border-2 p-2 px-16"
        }
        >  AddBanner</NavLink> </li>  
            
         </>

        :
          <>
          
          
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
           

          
          </>



        
          }
             
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