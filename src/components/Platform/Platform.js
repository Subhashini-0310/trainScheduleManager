// components/Platform/Platform.js
import React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import TrainCard from '../TrainCard/TrainCard';

const Platform = ({ platformNumber, train }) => (
    <Card variant="outlined" sx={{ width: 300, padding: 2, textAlign: 'center' }}>
        <Typography variant="h5">Platform {platformNumber}</Typography>
        {train ? <TrainCard train={train} type={"platform-info"} /> : <Typography>No Train Assigned</Typography>}
    </Card>
);

export default Platform;
