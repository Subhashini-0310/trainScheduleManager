// src/services/allocatePlatforms.js

import sortTrainsByPriority from './sortTrainsByPriority';

const allocatePlatforms = (trains, platformCount) => {
    // Sort trains by priority before allocation
    const sortedTrains = sortTrainsByPriority(trains);
    const platforms = Array(platformCount).fill(null); // Initialize empty platforms
    const waitingQueue = []; // Initialize waiting queue

    sortedTrains.forEach((train) => {
        // Find the first empty platform for the train
        const availablePlatform = platforms.findIndex((p) => p === null);

        if (availablePlatform !== -1) {
            // Allocate train to available platform
            platforms[availablePlatform] = train;
        } else {
            // Add to waiting queue if no platform is available
            waitingQueue.push(train);
        }
    });

    return { platforms, waitingQueue };
};

export default allocatePlatforms;
