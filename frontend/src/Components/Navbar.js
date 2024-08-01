import React from "react";
import bwlogo from "../assests/baoswheelslogo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-secondary fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 shadow-md z-50">
      <div className="navbar-start">
        <img src={bwlogo} alt="Baos Wheels Logo" className="w-96 h-auto" />
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal text-primary font-russoone text-2xl gap-12 ml-64">
          <li className="hover:text-baseprimary">
            <a href="#dashboard" className="hover:bg-transparent">
              Dashboard
            </a>
          </li>
          <li className="hover:text-baseprimary">
            <a href="#reviews" className="hover:bg-transparent">
              Reviews
            </a>
          </li>
          <li className="hover:text-baseprimary">
            <a href="#articles" className="hover:bg-transparent">
              Articles
            </a>
          </li>
          <li className="hover:text-baseprimary">
            <a href="#users" className="hover:bg-transparent">
              Users
            </a>
          </li>
          <li className="hover:text-baseprimary">
            <a href="#logout" className="hover:bg-transparent">
              Logout
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">{/* Additional components or buttons */}</div>
    </div>
  );
};

export default Navbar;
