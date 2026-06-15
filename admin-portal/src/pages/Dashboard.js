import React from 'react';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>150</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p>$25,000</p>
        </div>
        <div className="stat-card">
          <h3>Active Users</h3>
          <p>350</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
