import React, { Children, useContext } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import "../App.css";
import { SidebarData } from './SidebarData';

import { Button } from '@mui/material';
import authContext from '../Login/context';



export default function Sidebar({ children, isloggedin, isadmin }) {
    const navigate = useNavigate();
    const auth = useContext(authContext);

    return (


        <div className='containner'>
            <div className="sidebar">
                <ul className='sidebarlist'>
                    {SidebarData.map((val, key) => {

                        return (
                            <li key={key} className="roww" id={window.location.pathname == val.link ? "active" : ""}
                                onClick={() => { window.location.pathname = val.link }}>

                                {""}
                                <div id='icon'> {val.icon}</div>
                                {""}
                                <div id='title'> {val.title}</div>
                                {""}

                            </li>
                        )

                    })}
                </ul>
                <Button id='logout' onClick={() => {
                    localStorage.removeItem('isloggedin')
                    localStorage.removeItem('isadmin')
                    isloggedin(false)
                    isadmin(false)

                    navigate('/')

                }}> <LogoutIcon /> LOG out </Button>
            </div>
            <main>{children}</main>
        </div>

    )
}
