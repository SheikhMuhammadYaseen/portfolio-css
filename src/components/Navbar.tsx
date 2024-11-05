import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar-container">
      <span className="navbar-title">ADAM</span>
      <ul className={`menu ${menuOpen ? "menu-open" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/projects">Projects</a></li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;