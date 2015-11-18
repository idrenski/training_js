/**
 * Created by idrenski on 11/17/2015.
 */
"use strict"

/*try {
    throw new Error("Raise error in Try!", 2);
}
catch (err) {
    console.log("Catch error: " + err);
}
finally {
    console.log('Do final action before die!');
}*/

function MultiplicatorUnitFailure() {
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = 'MultiplicatorUnitFailure';

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a * b;
    else
        throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    }
    catch (e) {
        if (e instanceof MultiplicatorUnitFailure) {

            /* recursive-function needs to return defined result only*/
            // http://stackoverflow.com/questions/10762312/javascript-recursive-function-returning-undefined
            var result = reliableMultiply(a, b);
            if (result) return result;

        }
        else
            throw e;
    }
}


console.log(reliableMultiply(8, 8));