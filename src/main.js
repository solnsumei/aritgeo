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

        else {
            let addSpread = value[1] - value[0];
            let multiplySpread = value[1] / value[0];
            let isArithmetric = 'Arithmetic';
            let isGeometric = 'Geometric';

            //
            for (let counter = 0; counter < value.length; counter++) {
                // Checking for an array containing a non integer
                if (typeof(value[counter]) != 'number') {
                    return -1;
                }

                if (counter > 0) {

                    // checking for a failed arithmetic progression
                    if ((value[counter] - value[counter - 1]) !== addSpread) {
                        isArithmetric = null;
                    }
                    // checking for a failed geometric progression
                    if ((value[counter] / value[counter - 1]) !== multiplySpread) {
                        isGeometric = null;
                    }
                }

            }

            if (!isArithmetric && !isGeometric) {
                return -1
            }

            return isArithmetric || isGeometric;
        }

    }
};