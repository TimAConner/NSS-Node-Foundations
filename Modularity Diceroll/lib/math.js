module.exports.randomInt = (lowerBound = 1, upperBound = 6) => {
    const inclusiveUpperBound = upperBound + 1,
    inclusiveLowerBound = lowerBound;

    return Math.random(inclusiveLowerBound, inclusiveUpperBound);
};