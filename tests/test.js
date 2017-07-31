const assert = require('chai').assert;
const myApp = require('../src/main.js');

let a = 5;
describe("aritGeo", () => {

    describe("handle invalid input", () => {
        it("should return -1 for 'demo'", () => {
            assert.equal(myApp.aritGeo('demo'), -1);
        });

        it("should return -1 for an integer 5", () => {
            assert.equal(myApp.aritGeo(5), -1);
        });

        it("should return -1 for array containing non integer values [2, 'demo', 6]", () => {
            assert.equal(myApp.aritGeo([2, 'demo', 6]), -1);
        });

        it("should return -1 for a non integer array ['hello', 'demo', '6']", () => {
            assert.equal(myApp.aritGeo(['hello', 'demo', '6']), -1);
        });

    });

});