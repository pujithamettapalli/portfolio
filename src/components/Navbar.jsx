import React from "react";

function Navbar() {
  return (
    <div className="navbar">

      <h2 className="logo">Pujitha Mettapalli</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </div>
  );
}

export default Navbar;