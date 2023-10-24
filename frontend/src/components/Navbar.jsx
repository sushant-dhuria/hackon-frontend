// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='left'>
      <ul>
        <li><Link to="/">Prime Video</Link></li>
        </ul>
        </div>
        <div className='right'>
          <ul>
        <li><Link to="/movie">Watch Movie</Link></li>
        <li><Link to="/rent">Rent Movie</Link></li>
        <li><Link to="/searchTimeStamp">Search TimeStamp</Link></li>
        <li><Link to="/plotsearch">Plot Search</Link></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
