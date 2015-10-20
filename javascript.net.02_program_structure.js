/**
 * Created by idrenski on 9/16/2015.
 */

/*Exercise 1*/
/*
var tri = '#';
for (var i = 0; i <= 6; i++) {
    console.log(tri);
    tri = tri + '#';
}
*/

/*Exercise 2*/
/*for (var i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0))
        console.log('FizzBuzz');
    else if (i % 3 == 0)
        console.log('Fizz');
    else if (i % 5 == 0)
        console.log('Buzz');
    else
        console.log(i);
}*/


/*Exercise 3*/
/*
var size = 8;
var weight = size;
var height = size;
var stringOutput = '';

for (var i = 0; i < weight; i++) {
    var c1;
    var c2;

    if (i % 2) {
        c1 = ' ';
        c2 = '#';
    }
    else {
        c1 = '#';
        c2 = ' ';
    }

    for (var j = 0; j < height; j++) {
        if (j % 2)
            stringOutput = stringOutput + c1;
        else
            stringOutput = stringOutput + c2;
    }

    stringOutput = stringOutput + '\n';
}
console.log(stringOutput);*/

/*
function min(a, b) {
    if (a < b)
        return a;
    else
        return b;
}
console.log(min(0,-10));*/

/*function isEven(a) {
    if (a < 0)
        a = a * (-1);

    if (a == 0)
        return true;
    else if (a == 1)
        return false;

    if ((a - 2) == 0)
        return true;
    else if ((a - 2) == 1)
        return false;
    else
        return isEven(a - 2);
}
console.log(isEven(75));*/

/*function countChar(inString, inChar) {
    var Count = 0;
    for (var i = 0; i < inString.length; i++) {
        if (inString.charAt(i) == inChar)
            Count++;
    }
    return Count;
}
console.log(countChar("kakkerlak", "k"));*/

/* operations within array*/
/*
var arr = [1 ,'b'];
arr[2] = 'c';

arr.push('B1');

arr['A1'] = 'd';
arr.A1 = 'e';

console.log(arr.length);
console.log(arr[0], arr[1], arr[2]);
console.log(arr.length, arr["length"]);
console.log(arr['A1'], arr.A1);
console.log(arr['A1'].toUpperCase(), arr.A1.toUpperCase());
console.log(arr);
var s = arr.pop();
console.log(arr, s, arr.join('|'));


var anObject = {left: 1, right: 2};

console.log("left" in anObject);*/

/*Data Structures: Objects and Arrays*/

/*function range(start, end, step) {
    var ra = [];
    if (step == undefined)
        step = 1;

    if (start <= end) {
        for (var i = start; i <= end; i = i + step) {
            ra.push(i);
        }
    }
    else {
        for (var i = start; i >= end; i = i + step) {
            ra.push(i);
        }
    }
    return ra;
}

function sum(ra) {
    console.log(ra);
    var s = 0;
    for (var i = ra.length - 1; i >= 0; i--) {
        s += ra.pop();
    }
    return s;
}
console.log(sum(range(1, 10)));*/

/*reverseArray */

/*function reverseArray(arr){
    var revarr = [];

    for (var i = arr.length - 1; i >= 0; i--) {
        revarr.push(arr.pop());
    }

    return revarr;
}
console.log(reverseArray(["A", "B", "C"]));
*/

/*reverseArrayInPlace */
/*
function reverseArrayInPlace(arr) {
    var len = Math.floor(arr.length / 2);
    var ele;

    for (var i = 0; i < len; i++) {

        ele = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = ele;

    }
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);*/

/* Lists*/
/* convert Array to List*/
/*function arrayToList(arr) {
    var list = {};

    function addElement(value, node) {
        var listIn = {};

        listIn.value = value;
        listIn.rest = node;

        if (value == undefined)
            return null;
        else
            return listIn;
    }

    for (var i = arr.length; i >= 0; i--) {
        list = addElement(arr[i], list);
    }

    return list;
}
console.log(arrayToList([10, 20]));

function listToArray(list) {
    var arr = [];
    for (var node = list; node; node = node.rest) {
        // console.log('node ->', node);
        arr.push(node.value);
    }
    return arr;
}
console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(elementIn, listIn) {
    var list = {};

    list.value = elementIn;
    list.rest = listIn;

    return list;
}
console.log(prepend(10, prepend(20, null)));

function nth(list, elementNo) {
    var arr = listToArray(list);
    return arr[elementNo - 1];
}
console.log(nth(arrayToList([10, 20, 30]), 1));*/


/* Deep comparison Objects*/
/*
function deepEqual(obj1, obj2) {

    for (var o in obj1) {

        // object type
        if ((typeof obj1[o] == "object") && obj1[o] != null)
            return deepEqual(obj1[o], obj2[o]);

        // simple type
        if (obj1[o] != obj2[o])
            return false;
    }
    return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(obj, {here: {is: "xx"}, object: 2}));*/

/*
function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

/!*forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
// ? Wampeter
// ? Foma
// ? Granfalloon*!/


var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
    sum += number;
});
console.log(sum);
// ? 15
*/


var arrays = [[1, 2, 3], [4, 5], [6]];

// Loop in elements of simple array
function reduce(arr, vArr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array)
            return reduce(arr[i]);
        else
            vArr.push(arr[i]);

    }
}

/*
function reduce(arr, vArr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array)
            return reduce(arr[i]);
        else
            vArr.push(arr[i].toString());

    }
}
*/


// Loop in elements of array of arrays
function concat(arrs, f) {
    var vArr = [];

    for (var i = 0; i < arrs.length; i++)
        f(arrs[i], vArr);
    return vArr;
}

console.log(concat(arrays, reduce));