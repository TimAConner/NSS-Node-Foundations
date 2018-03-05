const { createReadStream, appendFile } = require('fs');
const { Transform, Writable } = require('stream');
const [,, filePath] = process.argv;
const upperCaseify = Transform();
const appendToFile = Writable();

upperCaseify._transform = (buffer, _, callback) => {
    callback(null, buffer.toString().toUpperCase());
};
appendToFile._write = (buffer, _, callback) => {
    appendFile("languages_caps.json", buffer.toString());
};

if(filePath){
    createReadStream(filePath)
    .pipe(upperCaseify)
    .pipe(appendToFile);
} else {
    process.stdout.write("Usage: stream.js [file path]");
}