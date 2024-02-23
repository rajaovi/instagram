import React from 'react';
import Sidebar from '../../components/Sidebar';
import './_home.scss';

const Dashboard = () => {
  return (
    <main>
      <div className="up-home">
        <Sidebar />
        <div className="up-home__home-feeds">
          <h1>Feed</h1>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
