// components/TrainDashboard/TrainDashboard.js
import React, { useState, useEffect } from 'react';
import { Input, Typography, useTheme } from '@mui/joy'; // Import MUI Joy Input
import Box from '@mui/joy/Box';

import CSVUpload from '../CSVUpload/CSVUpload';
import Platform from '../Platform/Platform';
import WaitingQueue from '../WaitingQueue/WaitingQueue';
import { allocatePlatforms } from '../../services/scheduleService';

const TrainDashboard = () => {
    const [trains, setTrains] = useState([]);  // List of trains from CSV
    const [platformCount, setPlatformCount] = useState(""); // Number of platforms
    const [allocatedPlatforms, setAllocatedPlatforms] = useState([]); // Trains on platforms
    const [waitingQueue, setWaitingQueue] = useState([]); // Trains waiting for a platform
    const [inputValue, setInputValue] = useState('');
    const theme = useTheme()


    useEffect(() => {
        // Allocate platforms only if we have trains data
        if (trains.length > 0) {
            const { platforms, waitingQueue } = allocatePlatforms(trains, platformCount);
            setAllocatedPlatforms(platforms);
            setWaitingQueue(waitingQueue);
        }
    }, [trains, platformCount]); // Depend on `trains` and `platformCount`

    useEffect(() => {
        console.log('Current platform count:', platformCount); // Debug log
    }, [platformCount]);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        // Parse the input value and set platform count if valid
        const number = parseInt(value, 10);
        if (!isNaN(number) && number >= 2 && number <= 20) {
            setPlatformCount(number);
        }
    };

    const handleUpload = (uploadedTrains) => {
        console.log({ uploadedTrains })
        setTrains(uploadedTrains);
    }

    return (
        <Box className="train-dashboard" padding={2} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} >
            <Typography color="primary" fontWeight={"xl"} fontSize={"2rem"} variant="outlined" borderRadius={8} width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} marginBottom={2} sx={{ backgroundColor: `${theme?.colorSchemes?.light?.palette?.primary?.background}` }}>
                Train Schedule Manager
            </Typography>
            <Box className="config-section">
                <Typography marginBottom={1} fontFamily={"Helvetica"} fontSize={"lg"} fontWeight={"lg"}>
                    Select Platform Count
                </Typography>
                <Input
                    type="number"
                    value={platformCount}
                    onChange={handleInputChange}
                    placeholder="Number of Platforms"
                    sx={{ marginRight: 2 }}
                    inputProps={{ min: 2, max: 20 }} // Optional for native validation
                />
                <CSVUpload onUpload={handleUpload} />
            </Box>

            <Box marginBottom={2}>
                <Typography marginBottom={1} fontFamily={"Helvetica"} fontSize={"lg"} fontWeight={"lg"} color={"primary"}>
                    Train Schedule:
                </Typography>
                <Box className="platform-section" display={"flex"} flexWrap={"wrap"} gap={2}>

                    {allocatedPlatforms.map((train, i) => (
                        <Platform key={i} platformNumber={i + 1} train={train} />
                    ))}
                </Box>
            </Box>

            <Box marginBottom={2}>
                <Typography marginBottom={1} fontFamily={"Helvetica"} fontSize={"lg"} fontWeight={"lg"} color={"primary"}>
                    Waiting Queue:
                </Typography>
                <WaitingQueue trains={waitingQueue} backgroundColor={trains.length > 0 ? `${theme?.colorSchemes?.light?.palette?.warning?.[100]}` : `${theme?.colorSchemes?.light?.palette?.danger?.plainActiveBg}`} theme={theme} />
            </Box>

        </ Box >
    )
};

export default TrainDashboard;
