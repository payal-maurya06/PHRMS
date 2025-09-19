import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaCalendarCheck,
  FaUserMd,
  FaFilePrescription,
  FaFileAlt,
  FaMoneyBill,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "../common/sidebar.css";

const PatientSidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo sidebar-title">PHRMS</div>
      <ul className="sidebar-menu">
        <li> <Link to="/patientDashboard"><FaTachometerAlt /> Dashboard </Link></li>
        <li> <Link to="/appointments"><FaCalendarCheck /> Appointments </Link></li>
        <li> <FaUserMd /> My Doctors </li>
        <li><FaFilePrescription /> Prescriptions </li>
        <li> <Link to="/reports"><FaFileAlt /> Reports </Link></li>
        <li><FaMoneyBill /> Billing</li>
        <li><FaCog /> Settings</li>
        <li><FaSignOutAlt /> Logout</li>
      </ul>
    </div>
  );
};

export default PatientSidebar;
