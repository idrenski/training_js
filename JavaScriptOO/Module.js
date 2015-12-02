/**
 * Created by idrenski on 11/24/2015.
 */
(function(exports) {
    var names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    exports.name = function(number) {
        return names[number];
    };
    exports.number = function(name) {
        return names.indexOf(name);
    };

})(monthA = {});

console.log(monthA.name(2));
console.log(monthA.number("Nov"));



var monthB = function() {
    var names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return {
        name: function(number) { return names[number]; },
        number: function(name) { return names.indexOf(name); }
    };
}();

console.log(monthB.name(2));
console.log(monthB.number("Nov"));

