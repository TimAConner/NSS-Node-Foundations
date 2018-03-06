module.exports.parseArgs = args => {
    const [,, count = 1, sides = 6] = args;
    return {count, sides};
};