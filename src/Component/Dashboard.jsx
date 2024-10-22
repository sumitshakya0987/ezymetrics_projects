import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';
import logo from '../assets/logo.png';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [activePeriod, setActivePeriod] = useState('12month');

  // Dummy data for the chart
  const data = {
    labels: ['Daily', 'Weekly', 'Monthly'],
    datasets: [
      {
        label: '12 month',
        data: activePeriod === '12month' ? [200, 150, 180] : [50, 100, 120], // Change data based on the activePeriod
        backgroundColor: ['#6366f1', '#ec4899', '#10b981'],
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handlePeriodClick = (period) => {
    setActivePeriod(period);
  };

  return (
    
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <div className="logo-icon"><img src={logo}/></div>
        </div>
        <ul>
          <li className="active">Dashboard</li>
          <li>Leads</li>
          <li>Analytics</li>
          <li>Reports</li>
          <li>User Profile</li>
          <li>Log Out</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <input type="text" placeholder="Search..." className="search-bar" />
          <button className="today-btn">Today</button>
        </div>

        <div className="greeting">
          <h2>User Greeting Section</h2>
          <p>Good morning Ezymetrics</p>
        </div>

        <div className="stats">
          <div className="stat">
            <p>Total Users</p>
            <h3>15,000 <span>(+5%)</span></h3>
          </div>
          <div className="stat">
            <p>Total Leads</p>
            <h3>8,000 <span>(+3%)</span></h3>
          </div>
          <div className="stat">
            <p>New Users</p>
            <h3>500 <span>(+2%)</span></h3>
          </div>
          <div className="stat">
            <p>New Leads</p>
            <h3>300 <span>(+1%)</span></h3>
          </div>
        </div>

        <div className="chart-section">
          <div className="chart-header">
            <h3>Sales Over Time</h3>
            <div className="chart-buttons">
              <button 
                className={`chart-btn ${activePeriod === '12month' ? 'active' : ''}`}
                onClick={() => handlePeriodClick('12month')}
              >
                12 month
              </button>
              <button 
                className={`chart-btn ${activePeriod === '30days' ? 'active' : ''}`}
                onClick={() => handlePeriodClick('30days')}
              >
                30 days
              </button>
            </div>
          </div>

          <div className="chart">
            {/* Bar Chart */}
            <Bar data={data} options={options} />
          </div>

          <div className="chart-footer">
            <button className="filter-btn">Filter</button>
            <button className="export-btn">Export</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
