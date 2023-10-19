// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Prime Video</Link></li>
        <li><Link to="/movie">Watch Movie</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
