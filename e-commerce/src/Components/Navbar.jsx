import React from "react";
import { IoCartOutline } from "react-icons/io5";
import profile from "../assets/profile.jpg";

const Navbar = () => {
  return (
    <div>
      <h3 className="">OnlineStore</h3>
      <div>
        <button>Home</button>
        <button>Search</button>
      </div>
      <div>
        <IoCartOutline />
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Navbar;
