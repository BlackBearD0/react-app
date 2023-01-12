import React, { Children } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css";
import { ClientSidebarData } from './ClientSideBarData';
import { Button } from '@mui/material';
import authContext from '../Login/context';
import LogoutIcon from '@mui/icons-material/Logout';


export default function ClientSidebar({ children, isloggedin, isadmin }) {
    const navigate = useNavigate();
    return (
        <div className='containner'>
            <div className="sidebar">
                <ul className='sidebarlist'>
                    {ClientSidebarData.map((val, key) => {

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
                <Button id='logoutt' onClick={() => {
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
