import Sidebar from "../common/sidebar";
import Cards from "../common/card";
import "./patientDashboard.module.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Cards />
    </div>
  );
};

export default Dashboard;
