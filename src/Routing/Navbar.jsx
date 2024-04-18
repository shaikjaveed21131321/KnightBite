import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/kb_logo_new_2.png";
const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div id="logo">
          <img src={logo} alt="" />
        </div>
        <div id="link">
          <Link to="/" className="li">
            Home
          </Link>
          <Link to="/about/" className="li">
            About
          </Link>
          <Link to="/menu/" className="li">
            Menu
          </Link>
          <Link to="/franchies/" className="li">
            Franchise
          </Link>
        </div>
      </div>
      
      
    </>
  );
};
export default Navbar;
