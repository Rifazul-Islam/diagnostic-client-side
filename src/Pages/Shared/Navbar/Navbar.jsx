import { Link, NavLink } from "react-router-dom";

import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";



const Navbar = () => {

    const {user,loginOut} = useAuth();

    const [isAdmin] = useAdmin();

    console.log(isAdmin);

    const SignOut = ()=>{
        loginOut()
        .then(()=>{
            toast.success(" User Sign Out successfully")
        })
    }

  const menuItems = <>
       <li> 
    <NavLink to="/"
    className={({isActive})=>
    isActive ? "bg-blue-200 p-2 rounded-md" : " "
  }
   > Home</NavLink> </li>
       <li> <NavLink> About</NavLink> </li>
       <li> <NavLink to="/allTest"> All Test </NavLink> </li>
       <li> <NavLink to="/register"
            className={({isActive})=>
            isActive ? "bg-blue-200 p-2 rounded-md" : " "
       } >Register </NavLink> </li>


    {/**User Condition if isAdmin and other */}      

   {
    user && isAdmin &&  <li> <NavLink to="/dashboard/adminHome"
    className={({isActive})=>
    isActive ? "bg-blue-200 p-2 rounded-md" : " " } > Dashboard </NavLink> </li>
   }


{
    user && !isAdmin &&  <li> <NavLink to="/dashboard/myProfile"
    className={({isActive})=>
    isActive ? "bg-blue-200 p-2 rounded-md" : " " } > Dashboard2 </NavLink> </li>
   }
      
  </>

  

    return (
    <div>
    <div className="navbar bg-base-100  shadow-lg px-3">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="space-x-3 text-[18px] menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
    </div>
    <h2 className="cursor-pointer text-2xl font-bold"> 
    <img className="w-24"  src="https://i.ibb.co/JKgZhwS/logo.png" alt="" />
      </h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="space-x-3 text-[18px] menu-horizontal px-1">
    {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ? <button onClick={SignOut} className="">Sign out</button> : <Link to="/login" className="">Login</Link>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;