'use strict';

const { bgRed: red, bgWhite: white, bgBlue: blue } = require('chalk');
const stripes = 13;
const width = 50;
const blueWidth = 15;
const blueHeight = 7;
const stateAmount = 50;

for(let i = 0; i < stripes; i++){
    // Add a line break for each stripe
    console.log("");
    
    // Blue
    if(i < blueHeight){
        const shouldPrintStar = i % Math.floor(((blueWidth*blueHeight)/stateAmount)) === 0 ? true : false;
        for(let i = 0; i < blueWidth; i++) process.stdout.write(`${blue(`${shouldPrintStar ? `\u2606` : ` `}`)}`);
    }
    // Red Stripes
    if(i % 2 === 0){
        // console.log(" ");
        if(i < blueHeight) for(let i = blueWidth; i < width; i++) process.stdout.write(`${red(" ")}`);
        if(i >= blueHeight) for(let i = 0; i < width; i++) process.stdout.write(`${red(" ")}`);
    }
    // White Stripes
    if(i % 2 !== 0){
        // console.log(" ");
        if(i < blueHeight) for(let i = blueWidth; i < width; i++) process.stdout.write(`${white(" ")}`);
        if(i >= blueHeight) for(let i = 0; i < width; i++) process.stdout.write(`${white(" ")}`);
    }
}
