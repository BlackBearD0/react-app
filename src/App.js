import Register from './Register/Register';
import Sidebar from './SideBar/Sidebar';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Demands';
import Demands from './Dashboard/Demands';
import React, { useContext, useState } from 'react';
import FbDefaultForm from './Dashboard/FormDemande';
import ClientDemands from './Dashboard/ClientDemands';
import SignIn from './Login/newLogin';
import SignUp from './Register/SignUp';
import ClientSidebar from './SideBar/ClientSideBar';
import authContext from './Login/context';
import Config from './global.js';




function App() {


  const [isloggedin, setIsloggedIn] = useState(localStorage.getItem('isloggedin'));
  const [isadmin, setAdmin] = useState(localStorage.getItem('isadmin'));


  return (



    isloggedin ? (

      isadmin == true ? (
        <>

          <Sidebar isloggedin={setIsloggedIn} isadmin={setAdmin}>
            <Routes>
              <Route path="/" element={<Demands />} />
            </Routes>
          </Sidebar>
        </>
      ) : (
        <ClientSidebar isloggedin={setIsloggedIn} isadmin={setAdmin} >
          <Routes>
            <Route path="/form" element={<FbDefaultForm />} />
            <Route path="/" element={<ClientDemands />} />
          </Routes>
        </ClientSidebar>

      )
    ) : (

      <>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<SignIn isloggedin={setIsloggedIn} isadmin={setAdmin} />} />

        </Routes>
      </>
    )






  );
}

export default App;
