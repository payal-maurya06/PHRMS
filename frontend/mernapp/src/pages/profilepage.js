import React from "react";
import Sidebar from "../components/patient/patientSidebar";
import "./patientpage.css";

const ProfilePage = () => {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h2>Complete Your Profile</h2>
        <form className="form-container">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Date of Birth</label>
          <input type="date" />
          <label>Contact Number</label>
          <input type="text" placeholder="Enter your number" />
          <label>Address</label>
          <textarea placeholder="Enter your address"></textarea>
          <button type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
