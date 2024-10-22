import React from 'react';
import Dashboard from './Component/Dashboard';
import Leads from './Component/Leads';
import ReportGenerator from './Component/ReportGenerator';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Leads/>
      <ReportGenerator/>
    </div>
  );
}

export default App;

