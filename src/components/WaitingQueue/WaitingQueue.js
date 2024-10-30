// components/WaitingQueue/WaitingQueue.js
import React from 'react';
import { Card, Typography } from '@mui/joy';
import TrainCard from '../TrainCard/TrainCard';

const WaitingQueue = ({ trains, backgroundColor, theme }) => {
    console.log(trains)
    return (
        <Card variant="outlined" sx={{ padding: 2, backgroundColor: backgroundColor }} color={trains.length > 0 ? "warning" : "danger"}>
            {trains.length > 0 ? (
                trains.map((train) => <TrainCard key={train.id} train={train} theme={theme} type={"waiting"} />)
            ) : (
                <Typography color={"danger"}>No Trains waiting</Typography>
            )}
        </Card>
    )
};

export default WaitingQueue;
