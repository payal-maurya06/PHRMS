import React from "react";
import Sidebar from "../components/patient/patientSidebar";
import "./patientpage.css";

const ReportsPage = () => {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h2>Upload Medical Reports</h2>
        <form className="form-container">
          <label>Select Report File</label>
          <input type="file" />
          <label>Description</label>
          <textarea placeholder="Report details..."></textarea>
          <button type="submit">Upload Report</button>
        </form>
      </div>
    </div>
  );
};

export default ReportsPage;
