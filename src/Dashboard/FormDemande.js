

import {
    Card,
    CardContent,
    Divider,
    Box,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Grid,
    RadioGroup,
    Radio,
    FormControl,
    MenuItem,
} from "@mui/material";
import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router";

const numbers = [
    {
        value: "materiel",
        label: "materiel",
    },
    {
        value: "consomable",
        label: "consomable",
    },
    {
        value: "aide humain",
        label: "aide humain",
    },

];

const FbDefaultForm = () => {
    const navigate = useNavigate();
    const [number, setNumber] = React.useState("");
    const handleChange3 = (event) => {
        setNumber(event.target.value);
    };

    const createDemande = (e) => {
        e.preventDefault();
        const data = e.currentTarget.elements;
        const demande = {
            description: data.description.value,
            typebesoin: number,
            statut: 'en cours ',
            user: {
                id: 4,
                email: 'client@gmail.com',
                firstName: 'client',
                lastName: 'test',
                tele: '06458975',
                username: 'client',
            }
        }
        console.log(demande);

        axios.post('http://localhost:8083/demandes/send', demande)
            .then(response => {
                console.log(response.data);
                alert('ajouter avec succe')
                navigate('/');


            })
            .catch(error => {
                console.log(error);
            });

    }




    return (
        <div>
            {/* ------------------------------------------------------------------------------------------------ */}
            {/* Basic Checkbox */}
            {/* ------------------------------------------------------------------------------------------------ */}
            <Card
                variant="outlined"
                sx={{
                    p: 0,
                }}
            >
                <Box
                    sx={{
                        padding: "15px 30px",
                    }}
                    display="flex"
                    alignItems="center"
                >
                    <Box flexGrow={1}>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: "500",
                            }}
                        >
                            creer une demande
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <CardContent
                    sx={{
                        padding: "30px",
                    }}
                >
                    <form onSubmit={createDemande}>
                        <TextField
                            id="description"
                            label="Description"
                            variant="outlined"
                            defaultValue=""
                            fullWidth
                            sx={{
                                mb: 2,
                            }}
                        />

                        <TextField
                            fullWidth
                            id="type2"
                            variant="outlined"
                            select
                            label="selectionner le type "
                            value={number}
                            onChange={handleChange3}
                            sx={{
                                mb: 2,
                            }}
                        >
                            {numbers.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <div>
                            <Button color="primary" variant="contained" type="submit" >
                                Submit
                            </Button>
                        </div>
                    </form  >
                </CardContent>
            </Card>
        </div>
    );
};

export default FbDefaultForm;
