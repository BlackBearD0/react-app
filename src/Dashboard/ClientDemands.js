import { DataGrid } from '@mui/x-data-grid'

import '../App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExTable from './table';
import CTable from './clienttable';


const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'status', headerName: 'status', width: 200 },
    { field: 'type', headerName: 'type', width: 200 },

];




function remplireData(data) {
    const rows = [];
    data.forEach(element => {

        rows.push({ id: element.id, description: element.description, status: element.statut, type: element.typebesoin, })
    });
    return rows;
}

export default function ClientDemands() {
    const [rows, setRows] = useState([]);
    const user = {
        id: 4,
        email: 'client@gmail.com',
        firstName: 'client',
        lastName: 'test',
        tele: '06458975',
        username: 'client',
    }
    const getdemands = () => {

        axios.post('http://localhost:8083/demandes/user', user)
            .then(response => {
                console.log(response.data);
                setRows(remplireData(response.data))

            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        getdemands();
    }, []);

    return (
        <>
            <h1> liste des demandes </h1>
            <div className=''>
                <CTable products={rows} getdemands={getdemands} />
            </div>
        </>
    );
}
