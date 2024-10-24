import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleisOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-[100vw] shadow-custom ">
      <div className="header h-[5rem] mx-[4rem] flex items-center justify-between">
        {/* hamburger menu */}
        <button onClick={handleisOpen} className="md:hidden">
          <GiHamburgerMenu />
        </button>

        <Link
          to="/"
          className="font-lato text-xl md:text-3xl font-bold hover:text-orange-600 cursor-pointer hover:duration-200"
        >
          OnlineStore
        </Link>

        {/* desktop links */}
        <div className="hidden md:flex space-x-10 font-semibold text-md text-gray-500 -ml-[18rem] h-full flex">
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

        {/* mobile links */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-80">
            <div className="absolute top-0 left-0 bottom-0 right-[50%] bg-white flex flex-col items-center space-y-2 z-50 py-[4rem]">
              <button
                onClick={handleisOpen}
                className="absolute top-4 left-4 text-3xl font-semibold"
              >
                &times;
              </button>
              <Link
                to="/"
                className="block text-gray-800 font-semibold text-lg hover:text-orange-600 hover:custom-outline"
              >
                Home
              </Link>
              <Link
                to="/search"
                className="block text-gray-800 font-semibold text-lg hover:text-orange-600"
              >
                Search
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
