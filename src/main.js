'use strict'

module.exports = {
    /* Check the arithmetic or geometric progression of an array */
    aritGeo:(value)=> {

        // Checking for non array values
        if (!Array.isArray(value)) {
            return -1;
        }

        //checking for an empty array
        else if (value.length === 0) {
            return 0;
        }

        // checking for an array with only one element
        else if (value.length < 3) {
            return -1;
        }

    }
};