import { Navigate, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

import PatientDashboard from "./components/patient/patientDashboard";
import ProfilePage from "./pages/profilepage";
import AppointmentPage from "./pages/appointmentpage";
import ReportsPage from "./pages/reportpage";

import DoctorDashboard from "./components/doctor/doctorDashboard";

function App() {
  return (
      <div className="App">
      <Routes>
        {/* Default route redirects to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />

        {/* Patient Dashboard and its sub-pages */}
        <Route path="/patientDashboard" element={<PatientDashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/reports" element={<ReportsPage />} />

         {/* Doctor Dashboard and its sub-pages */}
         <Route path="/doctorDashboard" element={<DoctorDashboard />} />


      </Routes>
    </div>
  );
}

export default App;
