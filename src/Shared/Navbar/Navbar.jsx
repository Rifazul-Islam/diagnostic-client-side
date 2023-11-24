import { NavLink } from "react-router-dom";


const Navbar = () => {

  const menuItems = <>
       <li> <NavLink> Home</NavLink> </li>
       <li> <NavLink> About</NavLink> </li>
       <li> <NavLink>Blog</NavLink> </li>
  </>


    return (
    <div>
    <div className="navbar bg-[#07332F] ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="space-x-3 text-[20px] menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
    </div>
    <h2 className="text-white cursor-pointer"> ManegeMend </h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="space-x-3 text-white text-[20px] menu-horizontal px-1">
    {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="text-white">Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;