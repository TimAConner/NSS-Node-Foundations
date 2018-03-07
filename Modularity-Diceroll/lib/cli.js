'use strict'

process.title = 'Dice Roll'

const { argv: [,, ...args] } = process,
      { count, sides } = require('./parse-args')(args),
      { roll, toDiceNotation } = require('./dice');

const dice = toDiceNotation({count, sides}),
      totalRolls = roll(dice);

console.log(`Rolled: ${dice}`);
for(let roll of totalRolls){
    console.log(roll);
}