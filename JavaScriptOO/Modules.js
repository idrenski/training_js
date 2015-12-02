/**
 * Created by idrenski on 11/23/2015.
 */

// scope and namespace, using functions as namespace

var dayName = function () {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    return function (number) {
        return names[number];
    };
}();

console.log(dayName(3));

// wrap as declaration of function
(function() {
    function square(x) { return x * x; }
    var hundred = 100;

    console.log(square(hundred));
})();

// objects as interfaces
var weekDay = function() {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    return {
        name: function(number) { return names[number]; },
        number: function(name) { return names.indexOf(name); }
    };
}();

console.log(weekDay.name(weekDay.number("Sunday")));


// convenient alternative is to declare an object (conventionally named exports) and add properties
(function(exports) {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];

    exports.name = function(number) {
        return names[number];
    };
    exports.number = function(name) {
        return names.indexOf(name);
    };

})(this.weekDay = {});

console.log(weekDay.name(weekDay.number("Saturday")));
/*
// Evaluating data as code


function evalAndReturnX(code) {
    eval(code);
    return x;
}
console.log(evalAndReturnX("var x = 2"));

// or

var plusOne = new Function("n", "return n + 1;");
console.log(plusOne(4))*/;

var month = function() {
    var names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return {
        name: function(number) { return names[number]; },
        number: function(name) { return names.indexOf(name); }
    };
}();

console.log(month.name(2));
console.log(month.number("Nov"));
