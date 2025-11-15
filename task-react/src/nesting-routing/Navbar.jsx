// Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiHeart, FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT - LOGO */}
      <div className="nav-left">
        <NavLink to="/" className="logo">
          KHILA
        </NavLink>
      </div>

      {/* CENTER - LINKS */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><NavLink to="/Home">HOME</NavLink></li>
        <li><NavLink to="/About">ABOUT</NavLink></li>
        <li><NavLink to="/Services">SERVICES</NavLink></li>
        <li><NavLink to="/">BRANDS</NavLink></li>
        <li><NavLink to="/Contact">CONTACT</NavLink></li>
      </ul>

      {/* RIGHT - ICONS */}
      <div className="nav-right">
        <FiSearch className="icon" />
        <FiHeart className="icon" />
        <FiUser className="icon" />
        <FiShoppingCart className="icon" />
      </div>

      {/* MOBILE MENU ICON */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
};

export default Navbar;
