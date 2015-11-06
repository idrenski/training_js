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
console.log('set', new Vector(1, 2));

// Add method plus
Vector.prototype.plus = function (newVector) {
    this.x = this.x + newVector.x;
    this.y = this.y + newVector.y;
    return new Vector(this.x, this.y);
};
console.log('plus', new Vector(1, 2).plus(new Vector(2, 3)));

// Add method minus
Vector.prototype.minus = function (newVector) {
    this.x = this.x - newVector.x;
    this.y = this.y - newVector.y;
    return new Vector(this.x, this.y);
};
console.log('minus', new Vector(1, 2).minus(new Vector(2, 3)));

// Add property length as getter
Vector.prototype = {
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
};
console.log('length', new Vector(3, 4).length);

console.log('object ', Vector.prototype);
