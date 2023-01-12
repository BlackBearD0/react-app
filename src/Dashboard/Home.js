import React from 'react'
import Register from './Register/Register';
import Login from './Login/Login';
import Sidebar from './SideBar/Sidebar';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Demands';
import Demands from './Dashboard/Demands';

export default function Home() {
    return (
        <Sidebar>
            <Routes>
                <Route path="/demands" element={<Demands />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sidebar" element={<Sidebar />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Sidebar>
    )
}
