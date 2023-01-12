import { Box, Button, Chip, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import axios from "axios";




const CTable = ({ products, getdemands }) => {
    const accepter = (id) => {

        const data = {
            id: id,
            status: 'accepted'
        }
        axios.post('http://localhost:8083/demandes/status', data)
            .then(response => {
                console.log(response.data);
                // setRows(remplireData(response.data))
                getdemands();

            })
            .catch(error => {
                console.log(error);
            });
    }

    const refuser = (id) => {
        const data = {
            id: id,
            status: 'rejected'
        }
        axios.post('http://localhost:8083/demandes/status', data)
            .then(response => {
                console.log(response.data);
                // setRows(remplireData(response.data))
                getdemands();


            })
            .catch(error => {
                console.log(error);
            });

    }

    const deleteP = (data) => {

        axios.post('http://localhost:8083/demandes/delete', data)
            .then(response => {
                console.log(response.data);
                // setRows(remplireData(response.data))
                getdemands();


            })
            .catch(error => {
                console.log(error);
            });

    }


    return (
        <Table
            aria-label="simple table"

            sx={{
                mt: 1,
                whiteSpace: "nowrap",

            }}

        >
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Typography color="textSecondary" variant="h6">
                            Id
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography color="textSecondary" variant="h6">
                            description
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography color="textSecondary" variant="h6">
                            statut
                        </Typography>
                    </TableCell>
                    <TableCell >
                        <Typography color="textSecondary" variant="h6">
                            type de besoin
                        </Typography>
                    </TableCell>

                </TableRow>
            </TableHead>
            <TableBody >
                {products.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell padding='none' size='small'>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "100",
                                }}
                            >
                                {product.id}
                            </Typography>
                        </TableCell>
                        <TableCell >
                            <Typography color="textSecondary">
                                {product.description}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary">
                                {product.status}
                            </Typography>
                        </TableCell>
                        <TableCell >
                            <Typography color="textSecondary">
                                {product.type}
                            </Typography>
                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default CTable;
