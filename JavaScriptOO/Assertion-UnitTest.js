/**
 * Created by idrenski on 11/18/2015.
 */
function AssertionFailed(message) {
    this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);


function assert(test, message) {

    if (!test) {
        try {
            throw new AssertionFailed(message);
        }
        catch (error) {
            console.log('Test failed: ', error);
        }
    }
    else {
        console.log('Test successful.');
    }
}

function lastElement(array) {
    assert(array.length > 0, "empty array");
    assert(array[0] == 1, "firstElement is not 1");
}

lastElement([]);