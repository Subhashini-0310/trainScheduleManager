import React from 'react';
import Papa from 'papaparse';
import { Box, Button, Typography, useTheme } from '@mui/joy';

const CSVUpload = ({ onUpload }) => {
    const theme = useTheme(); // Access theme using useTheme
    console.log({ theme })

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    const trains = results.data.map((train, index) => ({
                        id: index,
                        trainNumber: train["Train Number"],
                        arrivalTime: new Date(`1970-01-01T${train["Arrival Time"]}:00`),
                        departureTime: new Date(`1970-01-01T${train["Departure Time"]}:00`),
                        priority: train.Priority,
                    }));
                    const validTrains = trains.filter(
                        (train) => !isNaN(train.arrivalTime) && !isNaN(train.departureTime)
                    );

                    onUpload(validTrains);
                },
            });
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
            <Typography marginBottom={1} fontFamily={"Helvetica"} fontSize={"lg"} fontWeight={"lg"}>
                Upload Your CSV File
            </Typography>
            <Button
                component="label"
                sx={{
                    backgroundColor: theme?.colorSchemes?.light?.palette?.primary?.main,
                    color: theme?.colorSchemes?.light?.palette?.primary?.contrastText,
                    '&:hover': {
                        backgroundColor: theme?.colorSchemes?.light?.palette?.primary?.main,
                    },
                    padding: '10px 20px',
                }}
                color='primary'
            >
                Upload CSV
                <input type="file" accept=".csv" onChange={handleFileUpload} hidden />
            </Button>
        </Box>
    );
};

export default CSVUpload;
