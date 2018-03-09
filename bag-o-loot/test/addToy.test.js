'use strict';
const { createTables } = require('../lib/createDatabase');
const { assert: { isFunction, isNotNaN, isNumber, isString } } = require('chai');

// Modules To Test
const  { addToy } = require('../lib/addToy');

describe('addToy module', () => {
    const toy = {
        toyName: "Box",
        childName: "Jordan"
    };

    beforeEach(done => {
        createTables().then(() => {
            done();
        });
    });

    it('should have an addToy function', () => {
        isFunction(addToy);
    });
    
    it('should return a number', () => {
        return addToy(toy).then(data => {
            isNotNaN(+data);
            isNumber(+data);
        });
    });

});