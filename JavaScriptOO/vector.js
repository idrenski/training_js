"use strict"
/**
 * Created by idrenski on 11/6/2015.
 */
/* ****************************************************************************************** */
/* Exercise OO JavaScript*/
/* Constructor Vector with two parameters*/
function Vector(x, y) {
    this.x = x;
    this.y = y;
}
//console.log('create', new Vector(1, 2));

// Add property length as getter
Vector.prototype = {
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
};
//console.log('length', new Vector(3, 4).length);

// Add method plus
Vector.prototype.plus = function (newVector) {
    return new Vector(this.x + newVector.x, this.y + newVector.y);
};
//console.log('plus', new Vector(1, 2).plus(new Vector(2, 3)));

// Add method minus
Vector.prototype.minus = function (newVector) {
    return new Vector(this.x - newVector.x, this.y - newVector.y);
};
//console.log('minus', new Vector(1, 2).minus(new Vector(2, 3)));



//console.log('length', new Vector(3, 4).length);

//console.log('object ', Vector.prototype);


/* Unit test*/
function testVector() {
    var p1 = new Vector(10, 20);
    var p2 = new Vector(-10, 5);
    var p3 = p1.plus(p2);

    console.log(p1.length, p2.length, p3.length, p3.plus(p1));

    if (p1.x !== 10) return "fail: x property";
    if (p1.y !== 20) return "fail: y property";
    if (p2.x !== -10) return "fail: negative x property";
    if (p3.x !== 0) return "fail: x from plus";
    if (p3.y !== 25) return "fail: y from plus";
    return "everything ok";
}
console.log(testVector());