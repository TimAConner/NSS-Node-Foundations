const { readFileSync } = require('fs');
const [,,userInput] = process.argv;
if (userInput) {
    try {
        const data = readFileSync(userInput);
        process.stdout.write(String(data));
    } catch ({message}) {
        console.log('Error', message);
    }
} else {
    process.stdout.write("Usage: file-io.js [file path]. \n");
}