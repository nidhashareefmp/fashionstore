// Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        KHILA
      </NavLink>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>
            SERVICES
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
