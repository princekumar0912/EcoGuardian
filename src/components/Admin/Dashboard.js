import React, { useState } from 'react';
import ManageData from './ManageData';
// import './Navbar.css'; // Your CSS file for styling
// import ManageData from './ManageData';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <nav className="navbar">
        <div className="logo">Admin Dashboard</div>
        <button className="toggle-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="/manage-complaints">Manage Complaints</a>
          <a href="">Login</a>
        </div>
      </nav> */}
      <nav class="navbar">
        <a class="admin-head" href="#">Admin Dashboard</a>
        <ul class="navbar-nav">

          <li><a href="#">Login</a></li>
        </ul>
        {/* <button class="navbar-toggle">&#9776;</button> */}
      </nav>

      <ManageData />

    </>
  );
}

export default Navbar;
