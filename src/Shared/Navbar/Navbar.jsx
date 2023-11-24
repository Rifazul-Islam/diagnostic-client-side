import { NavLink } from "react-router-dom";


const Navbar = () => {

  const menuItems = <>
       <li> <NavLink to="/"> Home</NavLink> </li>
       <li> <NavLink> About</NavLink> </li>
       <li> <NavLink>Blog</NavLink> </li>
       <li> <NavLink to="login" >Login </NavLink> </li>
  </>


    return (
    <div>
    <div className="navbar bg-base-100 py-7 shadow-lg px-3">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="space-x-3 text-[18px] menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
    </div>
    <h2 className=" cursor-pointer text-2xl font-bold"> Diagnostic </h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="space-x-3 text-[18px] menu-horizontal px-1">
    {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="">Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;