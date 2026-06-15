import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <h1>Starkperfumes</h1>
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
