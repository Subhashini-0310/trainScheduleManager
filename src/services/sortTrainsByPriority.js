// Utility function to sort trains by priority in descending order
// Trains with higher priority (numerically higher priority value) come first
const sortTrainsByPriority = (trains) => {
    return trains.sort((a, b) => b.priority - a.priority);
};

export default sortTrainsByPriority;
