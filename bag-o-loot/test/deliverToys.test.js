'use strict';
const { createTables } = require('../lib/createDatabase');
const { assert: { isFunction, isNotNaN, isNumber, isString, equal, isArray, property, isFalse, isTrue} } = require('chai');

// Module To Test
const  { deliverToys } = require('../lib/deliverToys');

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('bagoloot.sqlite');

const getChildsToys = ({childName}) => new Promise((resolve, reject) => {
    db.all(`SELECT is_delivered FROM toys t WHERE t.child_id = (SELECT child_id FROM children c WHERE c.name = '${childName}')`, (err, data) => {
        if (err) reject(err);
        else resolve(data);
    });
});

describe("deliverToys Toys module", () => {
    beforeEach(done => {
       createTables().then(() => {
           done();
       });
    });

    const child = {
        childName: 'Jordan'
    };

    it('should have a deliverToys function,', () => {
        isFunction(deliverToys);
    });
    it('should return true if it w orked', () => {
        return deliverToys(child).then(hasDataBeenDelivered => {
            isTrue(hasDataBeenDelivered);
        });
    });
    it('the childs toys properties should be false before deliverToys is called', () => {
        return getChildsToys(child).then(deliveredData => {
            for(let toy of deliveredData){
                property(toy, 'is_delivered');
                isFalse((toy.is_delivered == 'true'));
            }
        });
    });
    it('deliverToys should set childs toys to is_delivered = true', () => {
        return deliverToys(child).then(data => getChildsToys(child).then(deliveredData => {
            for(let toy of deliveredData){
                property(toy, 'is_delivered');
                isTrue((toy.is_delivered == 'true'));
            }
        }));
    });
});
