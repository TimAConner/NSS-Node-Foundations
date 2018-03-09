'use strict';
const { createTables } = require('../lib/createDatabase');
const { assert: { isFunction, isNotNaN, isNumber, isString, equal } } = require('chai');

// Module To Test
const  { addToy } = require('../lib/addToy');

describe('addToy module', () => {
    const toyToAdd = {
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
        return addToy(toyToAdd).then(data => {
            isNotNaN(data);
            isNumber(data);
        });
    });

    it('should equal 4', () => {
        return addToy(toyToAdd).then(addedId => {
            equal(addedId, 4);
        });
    });

});

