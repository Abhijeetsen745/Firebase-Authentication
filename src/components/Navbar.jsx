import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {
  // get user from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.clear('user');
    navigate('/login');
  }

  return (
    <div className="main lg:flex md:flex flex-wrap items-center justify-between  px-4 bg-[#2a056f] py-4 shadow-md">
      <div className="left">
        <div className="text-2xl text-white font-bold text-center">
          E-NoteBook
        </div>
      </div>
      <div className="right">
        <ul className="flex space-x-4 text-white justify-center items-center">
          
          <ul className='flex space-x-4 text-white justify-center items-center'>
                    <Link to={'/'}>
                        <li className='cursor-pointer'>Home</li>
                    </Link>
                    {user && <li onClick={logout} className='cursor-pointer'>Logout</li>}
                </ul>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
