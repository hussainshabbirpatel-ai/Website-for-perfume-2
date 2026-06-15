import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>StarkAdmin</h2>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
