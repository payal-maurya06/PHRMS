import PatientSidebar from "./patientSidebar";
import Card from "../common/card";

import "../common/Dashboard.css";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const patientName = localStorage.getItem("username") || "User"; // dynamically after login
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <PatientSidebar />
      <div className="dashboard-content">
        <h1 className="welcome-message">Welcome, {patientName}!</h1>
        <div className="card-container">
          <Card
            title="Complete Profile"
            description="Fill in your personal details to complete your profile."
            buttonText="Complete Profile"
            color="#e0f2fe"
            onClick={() => navigate("/profile")}
          />

          <div className="card-row">
            <Card
              title="Book Appointments"
              description="Schedule your first appointment with a doctor."
              buttonText="Book Now"
              color="#fef9c3"
              onClick={() => navigate("/appointments")}
            />
            <Card
              title="Upload Medical Reports"
              description="Upload and manage your medical documents."
              buttonText="Upload"
              color="#dcfce7"
              onClick={() => navigate("/reports")}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PatientDashboard;
