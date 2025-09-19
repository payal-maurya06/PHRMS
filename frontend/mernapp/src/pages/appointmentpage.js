import React from "react";
import Sidebar from "../components/patient/patientSidebar";
import "./patientpage.css";

const AppointmentPage = () => {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h2>Book Appointment</h2>
        <form className="form-container">
          <label>Doctor</label>
          <select>
            <option>Select Doctor</option>
            <option>Dr. Smith - Cardiologist</option>
            <option>Dr. Adams - Dermatologist</option>
            <option>Dr. Brown - Neurologist</option>
          </select>
          <label>Date</label>
          <input type="date" />
          <label>Time</label>
          <input type="time" />
          <button type="submit">Confirm Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPage;
