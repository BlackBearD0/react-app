import Register from './Register/Register';
import Login from './Login/Login';
import './App.css';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>

  );
}

export default App;
