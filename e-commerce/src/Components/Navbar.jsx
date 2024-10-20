import React from "react";
import { IoCartOutline } from "react-icons/io5";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-[100vw] shadow-custom">
      <div className="header h-[5rem] mx-[4rem] flex items-center justify-between">
        <Link
          to="/"
          className="font-lato text-3xl font-bold hover:text-orange-600 cursor-pointer hover:duration-200"
        >
          OnlineStore
        </Link>
        <div className="space-x-10 font-semibold text-md text-gray-500 -ml-[18rem] h-full flex">
          <div className="relative group h-full flex items-center">
            <Link to="/" className="border-3 hover:border-orange-500">
              Home
            </Link>
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-orange-500 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </div>

          <div className="relative group h-full flex items-center">
            <Link
              to="/search"
              className="hover:border-3 hover:border-orange-500"
            >
              Search
            </Link>
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-orange-500 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </div>
        </div>
        <div className="header-end flex items-center space-x-8">
          <IoCartOutline className="text-2xl cursor-pointer text-gray-600 hover:text-orange-600" />
          <div className="h-9 w-9 ">
            <img
              src={profile}
              alt="profile"
              className="rounded-full p-[1px] cursor-pointer hover:border-2 hover:border-green-500 hover:duration-200"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
