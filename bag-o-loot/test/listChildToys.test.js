'use strict';
const { createTables } = require('../lib/createDatabase');
const { assert: { isFunction, isNotNaN, isNumber, isString, equal, isArray, property } } = require('chai');

// Module To Test
const  { listChildsToys } = require('../lib/listChildToys');

describe("listChild'sToys module", () => {
    const child = {
        name: "Jordan"
    };
    it('should return an array', () => {
        return listChildsToys(child).then(data => { 
            isArray(data);
        });
    });
    
    it('should return an array', () => {
        return listChildsToys(child).then(data => {
            isArray(data);
        });
    });

});
