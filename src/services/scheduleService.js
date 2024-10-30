// services/scheduleService.js
export const allocatePlatforms = (trains, platformCount) => {
    const sortedTrains = [...trains].sort((a, b) => {
        if (a.priority === b.priority) {
            return a.arrivalTime - b.arrivalTime;
        }
        return a.priority.localeCompare(b.priority);
    });

    const platforms = Array(platformCount).fill(null);
    const allocatedTrains = sortedTrains.slice(0, platformCount);
    allocatedTrains.forEach((train, i) => {
        platforms[i] = train;
    });

    const waitingQueue = sortedTrains.slice(platformCount);

    return { platforms, waitingQueue };
};
