import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to Redis Demo</h2>
      <div className="dashboard-content">
        <div className="info-card">
          <h3>About This Demo</h3>
          <p>This application demonstrates data fetching and display with React.</p>
          <Link to="/users" className="view-users-btn">
            View Users
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;