import { DataGrid } from '@mui/x-data-grid'

import '../App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExTable from './table';

const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'utilisateur', headerName: 'utilisateur', width: 200 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'status', headerName: 'status', width: 200 },
    { field: 'type', headerName: 'type', width: 200 },

];




function remplireData(data) {
    const rows = [];
    data.forEach(element => {

        rows.push({ id: element.id, utilisateur: element.user.firstName, description: element.description, status: element.statut, type: element.typebesoin, })
    });
    return rows;
}

export default function Demands() {
    const [rows, setRows] = useState([]);
    const getdemands = () => {
        axios.get('http://localhost:8083/demandes/all')
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
                <ExTable products={rows} getdemands={getdemands} />
            </div>
        </>
    );
}
