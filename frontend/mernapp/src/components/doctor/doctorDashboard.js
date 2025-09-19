import Sidebar from "./doctorSidebar";
import Card from "../common/card";

import "../common/Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DoctorDashboard = () => {
  const docName = localStorage.getItem("username") || "Doctor";
  const navigate = useNavigate();

  // simulate first login flag (should come from backend in real app)
  const [isFirstLogin, setIsFirstLogin] = useState(true);

  useEffect(() => {
    // Example: get from API later
    const firstLoginStatus = localStorage.getItem("docFirstLogin") === "false" ? false : true;
    setIsFirstLogin(firstLoginStatus);
  }, []);

  const handleProfileComplete = () => {
    // After completing profile, mark login as not first time
    localStorage.setItem("docFirstLogin", "false");
    setIsFirstLogin(false);
    navigate("/profile");
  };

  // First time login cards (Onboarding)
  const onboardingCards = [
    {
      title: "Complete Profile",
      description: "Fill in your details to set up your account.",
      buttonText: "Complete Profile",
      color: "#e0f2fe",
      onClick: handleProfileComplete,
    },
    {
      title: "Set Availability",
      description: "Define your working hours to start accepting patients.",
      buttonText: "Set Now",
      color: "#fef9c3",
      onClick: () => navigate("/availability"),
    },
    {
      title: "Add Specialization",
      description: "Choose your area of expertise.",
      buttonText: "Add",
      color: "#dcfce7",
      onClick: () => navigate("/specialization"),
    },
  ];

  // Normal dashboard cards
  const normalCards = [
    {
      title: "Today's Appointments",
      description: "View and manage your schedule for today.",
      buttonText: "View",
      color: "#e0f2fe",
      onClick: () => navigate("/appointments"),
    },
    {
      title: "Pending Requests",
      description: "Approve or reject new patient requests.",
      buttonText: "Check",
      color: "#fef9c3",
      onClick: () => navigate("/requests"),
    },
    {
      title: "My Patients",
      description: "See your patient list and medical history.",
      buttonText: "View",
      color: "#dcfce7",
      onClick: () => navigate("/patients"),
    },
  ];

  const cardsToShow = isFirstLogin ? onboardingCards : normalCards;

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1 className="welcome-message">Welcome, Dr. {docName}!</h1>
        <div className="card-container">
          {cardsToShow.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
