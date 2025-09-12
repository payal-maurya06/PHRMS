import React from "react";
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
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">PHRMS</div>
      <ul className="sidebar-menu">
        <li><FaTachometerAlt /> Dashboard</li>
        <li><FaCalendarCheck /> Appointments</li>
        <li><FaUserMd /> My Doctors</li>
        <li><FaFilePrescription /> Prescriptions</li>
        <li><FaFileAlt /> Reports</li>
        <li><FaMoneyBill /> Billing</li>
        <li><FaCog /> Settings</li>
        <li><FaSignOutAlt /> Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
