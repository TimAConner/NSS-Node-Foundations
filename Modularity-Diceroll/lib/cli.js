'use strict'

process.title = 'Dice Roll'

const { argv: [,, ...args] } = process;
const { count, sides } = require('./parse-args')(args);
const { roll, toDiceNotation } = require('./dice');

const dice = toDiceNotation({count, sides});
const totalRolls = roll(dice);

console.log(`Rolled: ${dice}`);
for(let roll of totalRolls){
    console.log(roll);
}