import { Navigate, Route , Routes} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from "./components/patient/patientDashboard";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Navigate to='/login' />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/signup' element= {<Signup />} />
        <Route path='/home' element= {<Home />} />
        <Route path="/patientDashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
