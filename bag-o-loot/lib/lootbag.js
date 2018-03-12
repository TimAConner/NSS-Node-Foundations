'use strict';

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('bagoloot.sqlite');

// Commands
const { addToy } = require('./addToy');
const { removeToy } = require('./removeToy');
const { deliverToys } = require('./deliverToys');
const { listToys } = require('./listToys');
const { listChildsToys } = require('./listChildToys');

const { createTables } = require('./createDatabase');
const [,,command, option1, option2] = process.argv;

const listToysSelector = option => {
    if(typeof option.childName !== "undefined"){
        listChildsToys({
            childName: option.childName
        }).then(data => console.log(data));
    } else {
        listToys().then(data => console.log(data));
    }
};

const commandList = {
    add: addToy,
    remove: removeToy,
    ls: listToysSelector,
    delivered: deliverToys
};

if(typeof commandList[command] !== "undefined"){
    let args = {};
    if(typeof option1 !== "undefined") args.childName = option1;
    if(typeof option2 !== "undefined") args.toyName = option2;
    try {
        commandList[command](args);
    } catch ({message}) {
        console.log("Error", message);
    }
} else {
    console.log(`Usage: add [childName] [toyName], remove [childName] [toyName], ls, ls [childName], delivered [childName]`);
}
