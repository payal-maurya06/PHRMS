import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.module.css";
import { FaUserEdit, FaCalendarCheck, FaFileMedical } from "react-icons/fa";

const FirstLoginDashboard = ({ patientName }) => {
  const navigate = useNavigate();

  return (
    <div className="first-login-container">
      <h2 className="greeting">Welcome, {patientName}! </h2>
      <p className="subtext">This is your first time login. Let's get started:</p>

      <div className="cards-container">

        {/* Profile Completion Card */}
        <div className="first-card profile-card">
          <h3>Complete Your Profile</h3>
          <p>Fill out your personal details to complete your health profile.</p>
          <button
            className="card-btn"
            onClick={() => navigate("/complete-profile")}
          >
            <FaUserEdit className="btn-icon" />
            Complete Profile
          </button>
        </div>

        {/* Appointment Card */}
        <div className="first-card appointment-card">
          <h3>Book Your First Appointment</h3>
          <p>Schedule your very first appointment with a doctor.</p>
          <button
            className="card-btn"
            onClick={() => navigate("/appointments")}
          >
            <FaCalendarCheck className="btn-icon" />
            Book Appointment
          </button>
        </div>

        {/* Reports Card */}
        <div className="first-card reports-card">
          <h3>Upload Reports</h3>
          <p>Upload your previous medical records for better care.</p>
          <button
            className="card-btn"
            onClick={() => navigate("/upload-reports")}
          >
            <FaFileMedical className="btn-icon" />
            Upload Reports
          </button>
        </div>

      </div>
    </div>
  );
};

export default FirstLoginDashboard;
