/**
 * Created by idrenski on 1/5/2016.
 */

// Callback function example to Get resource asynchronous
function getURL(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener("load", function () {
        if (req.status < 400)
            callback(req.responseText);
        else
            callback(null, new Error("Request failed: " +
                req.statusText));
    });
    req.addEventListener("error", function () {
        callback(null, new Error("Network error"));
    });
    req.send(null);
}

// Example for Promises
function all(promises) {
    return new Promise(function (success, fail) {
        // Your code here.
        for (var i = 0; i < promises.length; i++) {
            var promo = promises[i];

            promo.then(function (text) {
                return success(promo);
            }, function (error) {
                return fail(promo);
            });

        }
    });
}

// Test code.
all([]).then(function (array) {
    console.log("This should be []:", array);
});
function soon(val) {
    return new Promise(function (success) {
        setTimeout(function () {
                success(val);
            },
            Math.random() * 500);
    });
}
all([soon(1), soon(2), soon(3)]).then(function (array) {
    console.log("This should be [1, 2, 3]:", array);
});
function fail() {
    return new Promise(function (success, fail) {
        fail(new Error("boom"));
    });
}
all([soon(1), fail(), soon(3)]).then(function (array) {
    console.log("We should not get here");
}, function (error) {
    if (error.message != "boom")
        console.log("Unexpected failure:", error);
});
