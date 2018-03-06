const { randomInt } = require('./math');
// Regex to match against [diceCount]D[diceSides] (2d6).  Two, six sided dice.
const DICE_REGEX = /([0-9]*)d([0-9]*)/; 

const roll = diceString => {
    const sides = DICE_REGEX.exec(diceString)[2];
    const count = DICE_REGEX.exec(diceString)[1];

    let rollArray = [];
    for(let i = 0; i < count; i++){
        rollArray.push(randomInt(1, sides));
    }

    return rollArray;
};

const toDiceNotation = ({count, sides}) => `${count}d${sides}`;

module.exports = {
    roll, 
    toDiceNotation
};

