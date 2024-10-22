// ReportGenerator.jsx
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { CSVLink } from 'react-csv';
import './ReportGenerator.css';

const ReportGenerator = () => {
  const [selectedDataSets, setSelectedDataSets] = useState({
    sales: true,
    engagement: true,
    revenue: false,
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample data for export
  const reportData = [
    { name: 'Sales Data', value: selectedDataSets.sales },
    { name: 'User Engagement', value: selectedDataSets.engagement },
    { name: 'Revenue', value: selectedDataSets.revenue },
  ];

  // CSV Export headers
  const csvHeaders = [
    { label: 'Data Set', key: 'name' },
    { label: 'Included', key: 'value' },
  ];

  // Handle PDF Export
  const handlePDFExport = () => {
    const doc = new jsPDF();
    doc.text('Report', 14, 10);
    doc.autoTable({
      head: [['Data Set', 'Included']],
      body: reportData.map((item) => [item.name, item.value ? 'Yes' : 'No']),
    });
    doc.save('report.pdf');
  };

  // Handle date selection (dummy calendar)
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="report-generator-container">
      <h2>Generate Reports</h2>
      <p>Select Data Range</p>

      <input type="month" value={selectedDate} onChange={handleDateChange} className="calendar-input" />

      <div className="data-sets">
        <label>
          <input
            type="checkbox"
            checked={selectedDataSets.sales}
            onChange={() => setSelectedDataSets({ ...selectedDataSets, sales: !selectedDataSets.sales })}
          />
          Sales Data
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedDataSets.engagement}
            onChange={() => setSelectedDataSets({ ...selectedDataSets, engagement: !selectedDataSets.engagement })}
          />
          User Engagement
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedDataSets.revenue}
            onChange={() => setSelectedDataSets({ ...selectedDataSets, revenue: !selectedDataSets.revenue })}
          />
          Revenue
        </label>
      </div>

      <div className="export-buttons">
        <button onClick={handlePDFExport} className="export-btn">Export PDF</button>
        <CSVLink
          data={reportData}
          headers={csvHeaders}
          filename="report.csv"
          className="export-btn"
        >
          Export CSV
        </CSVLink>
      </div>
    </div>
  );
};

export default ReportGenerator;
