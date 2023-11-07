import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
      const { user, logOut } = useContext(AuthContext)
      // console.log(user);
      const handleLogOut = () => {
            logOut()
                  .then(() => { })
                  .catch(error => console.log(error))
      }

      const links = <>
            <li> <NavLink to="/" className="hover:bg-slate-950 hover:text-white">Home</NavLink></li>
            <li> <NavLink to="/services"className="hover:bg-black hover:text-white" >Services</NavLink></li>
           

            {
                  user?.email ?
                        <>
                              {/* nave-test  */}
                              <li tabIndex={0} className=''>
                                    <details>
                                          <summary>Dashboard</summary>
                                          <ul className="p-2 bg-gray-500 z-50 w-[140px]">
                                                
                                                <li> <NavLink to="/manageservices" className="hover:bg-red-700 hover:text-white">Manage Services</NavLink></li>
                                                <li> <NavLink to="/addservices" className="hover:bg-red-700 hover:text-white">Add-services</NavLink></li>
                                                <li> <NavLink to="/mybookings" className="hover:bg-red-700 hover:text-white">My Bookings</NavLink></li>
                                                
                                          </ul>
                                    </details>   </li>

                              {/* nave-test  end*/}
                              
                              <li><button onClick={handleLogOut} >Log Out</button></li>
                        </>
                        : <li> <NavLink to="/login">Log In </NavLink></li>
            }

      </>
      return (
            <div className="navbar bg-red-700 text-white max-w-6xl mx-auto ">
                  <div className="navbar-start">
                        <div className="dropdown absolute z-[99]">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {links}
                              </ul>
                        </div>
                        <Link to='/'><h2 className='text-white text-4xl font-bold'>FitnesHomE</h2></Link>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                              {links}
                        </ul>
                  </div>
                  <div className="navbar-end">

                        {/* <p> {user?.email}</p> */}
                        {/* <img alt="" src={user?.photoURL} className="w-12 h-12 rounded-full ri ri dark:bg-yellow-400 ri ri"  /> */}
                        <div className="avatar">
                              <div className="bg-neutral-focus text-center flex items-center rounded-full w-14">
                              {`${user?.photoURL ? user?.photoURL :user?.email}`}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;