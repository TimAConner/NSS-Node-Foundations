const [,,...userInput] = process.argv;

const sumNumbers = values => {
    const numbers = values.map(value => Number(value)),
    sum = numbers.reduce((pv, cv) => pv + cv);
    
    return sum;
};

if(userInput.length !== 0){
    console.log(`${isNaN(sumNumbers(userInput)) ? 'Usage: node args.js [number number number]' : sumNumbers(userInput)}`);
} else {
    console.log('0');
}