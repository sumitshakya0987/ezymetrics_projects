// Leads.jsx
import React from 'react';
import './Leads.css';

const Leads = () => {
  // Dummy data for the leads
  const leadsData = [
    { id: '001', name: 'Alice Johnson', age: 28, email: 'alice.johnson@example.com' },
    { id: '002', name: 'Bob Smith', age: 34, email: 'bob.smith@example.com' },
    { id: '003', name: 'Catherine Lee', age: 22, email: 'catherine.lee@example.com' },
    { id: '004', name: 'David Brown', age: 45, email: 'david.brown@example.com' },
    { id: '005', name: 'Eva White', age: 30, email: 'eva.white@example.com' },
  ];

  return (
    <div className="leads-container">
      <h2>Leads List</h2>
      <table className="leads-table">
        <thead>
          <tr>
            <th>Lead ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leadsData.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.age}</td>
              <td>{lead.email}</td>
              <td>
                <button className="view-details-btn">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leads;
