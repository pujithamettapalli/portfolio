import React from "react";

function Footer() {
  return (
    <footer className="footer">

      <p>© 2026 Pujitha Mettapalli</p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      
      {/* Add contact details here */}
      <div className="footer-contact">
        
        <p>📞 +91 8688188909</p>
        <p>📍  Andhra Pradesh , West Godavari, Tanuku</p>
      </div>
      

    </footer>
  );
}

export default Footer;