

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



const FbDefaultForm = () => {



    const createDemande = (e) => {
        //console.log(desc);
        e.preventDefault();
        const data = e.currentTarget.elements;
        const demande = {
            description: data.description.value,
            typebesoin: data.type.value,
            statut: 'en cours ',
            user: {
                id: 3,
                email: 'hamid@gmail.com',
                firstName: 'hamid',
                lastName: 'test',
                tele: '06458975',
                username: 'hamiid',
            }
        }
        console.log(demande);

        /* const user = {
             id: 3,
             email: 'hamid@gmail.com',
             firstName: 'hamid',
             lastName: 'test',
             tele: '06458975',
             username: 'hamiid',
         }
 */
        axios.post('http://localhost:8083/demandes/send', demande)
            .then(response => {
                console.log(response.data);
                alert('ajouter avec succe')
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
                            id="type"
                            label="Type de besoin"
                            type="text"
                            variant="outlined"
                            fullWidth
                            sx={{
                                mb: 2,
                            }}
                        />
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
