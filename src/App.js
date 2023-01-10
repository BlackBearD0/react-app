import Register from './Register/Register';
import Login from './Login/Login';
import Sidebar from './SideBar/Sidebar';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard';


function App() {
  return (


    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/register" element={<Register />} />
    </Routes>


  );
}

export default App;
