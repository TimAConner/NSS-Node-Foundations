'use strict';
const { createTables } = require('../lib/createDatabase');
const { assert: { isFunction, isNotNaN, isNumber, isString, equal, isArray, property } } = require('chai');

// Module To Test
const  { listToys } = require('../lib/listToys');

describe('listToys module', () => {

    it('should return an array', () => {
        return listToys().then(data => {
            isArray(data);
        });
    });

    it('should return an array of objects with a name property', () => {
        return listToys().then(data => {
            for(const child of data){
                property(child, 'name');
            }
        });
    });

});
