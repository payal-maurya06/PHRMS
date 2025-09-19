import React from "react";
import { Link } from "react-router-dom";
import {
    FaTachometerAlt,
    FaCalendarCheck,
    FaUserMd,
    FaFilePrescription,
    FaFileAlt,
 FaCalendarDay,

    FaMoneyBill,
    FaCog,
    FaSignOutAlt,
} from "react-icons/fa";
import "../common/sidebar.css";

const DoctorSidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo sidebar-title">PHRMS</div>
            <ul className="sidebar-menu">
                <li> <Link to="/doctorDashboard"><FaTachometerAlt /> Dashboard </Link></li>
                <li> <FaCalendarCheck /> Appointments </li>
                <li> <FaUserMd /> My Patients </li>
                <li><FaFilePrescription /> Prescriptions</li>
                <li> <FaFileAlt /> Reports </li>
             
                <li><FaCalendarDay /> Availability</li>

                <li><FaMoneyBill /> Payments </li>
                <li><FaCog /> Settings</li>
                <li><FaSignOutAlt /> Logout</li>
            </ul>
        </div>
    );
};

export default DoctorSidebar;
