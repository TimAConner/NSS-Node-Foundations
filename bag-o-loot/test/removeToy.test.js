'use strict';
const { createTables } = require('../lib/createDatabase');
const { assert: { isFunction, isNotNaN, isNumber, isString, equal } } = require('chai');

// Module To Test
const  { removeToy } = require('../lib/removeToy');

describe('removeToy module', () => {
    const toyToRemove = {
        toyName: "Bottle",
        childName: "KenZ"
    };
    beforeEach(done => {
        createTables().then(() => {
            done();
        });
    });

    it('should have a removeToy function', () => {
        isFunction(removeToy);
    });
    it('should return true', () => {
        return removeToy(toyToRemove).then(didRemove => {
            equal(didRemove, true);
        });
    });
});