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

    describe("handle valid input", () => {
        it("should return 0 for an empty array []", () => {
            assert.equal(myApp.aritGeo([]), 0);
        });

        it("should return -1 for an array with only one element [9]", () => {
            assert.equal(myApp.aritGeo([9]), -1);
        });

        it("should return -1 for an array with only two elements [3, 6]", () => {
            assert.equal(myApp.aritGeo([3, 6]), -1);
        });

        it("should return -1 for an array[2, 5, 7, 8]", () => {
            assert.equal(myApp.aritGeo([2, 5, 7, 8]), -1);
        });

        it("should return Arithmetic for an arithmetic array [2, 4, 6, 8, 10]", () => {
            assert.equal(myApp.aritGeo([2, 4, 6, 8, 10]), "Arithmetic");
        });

        it("should return Arithmetic for an arithmetic array [6, 3, 0]", () => {
            assert.equal(myApp.aritGeo([6, 3, 0]), "Arithmetic");
        });

        it("should return Geometric for an geometric array [2, 4, 8, 16]", () => {
            assert.equal(myApp.aritGeo([2, 4, 8, 16]), "Geometric");
        });

        it("should return Geometric for an geometric array [27, 9, 3]", () => {
            assert.equal(myApp.aritGeo([27, 9, 3]), "Geometric");
        });

    });

});