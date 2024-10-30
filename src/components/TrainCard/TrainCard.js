// components/TrainCard/TrainCard.js
import React from 'react';
import { Card, Typography, useTheme } from '@mui/joy';
import { formatTime } from '../../utils/timeUtils';

const TrainCard = ({ train, type }) => {
    const theme = useTheme()
    console.log({ train }, { type })
    return (
        <Card variant="outlined" color={type === "waiting" ? "warning" : "success"} sx={{ padding: 2, backgroundColor: type === "waiting" ? `${theme?.colorSchemes?.light?.palette?.warning?.[200]}` : `${theme?.colorSchemes?.light?.palette?.success?.[100]}` }}>
            <Typography color={type === "waiting" ? "warning" : "success"} variant="h6">Train {train.trainNumber}</Typography>
            <Typography color={type === "waiting" ? "warning" : "success"}>Priority: {train.priority}</Typography>
            <Typography color={type === "waiting" ? "warning" : "success"}>Arrival: {formatTime(train.arrivalTime)}</Typography>
            <Typography color={type === "waiting" ? "warning" : "success"} >Departure: {formatTime(train.departureTime)}</Typography>
        </Card>
    )
};

export default TrainCard;
