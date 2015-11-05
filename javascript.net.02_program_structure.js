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


/*
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

/!*
function reduce(arr, vArr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array)
            return reduce(arr[i]);
        else
            vArr.push(arr[i].toString());

    }
}
*!/


// Loop in elements of array of arrays
function concat(arrs, f) {
    var vArr = [];

    for (var i = 0; i < arrs.length; i++)
        f(arrs[i], vArr);
    return vArr;
}

console.log(concat(arrays, reduce));*/

/*
var ANCESTRY_FILE = "[\n  " + [
        '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
        '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
        '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
        '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
        '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
        '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
        '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
        '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
        '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
        '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
        '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
        '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
        '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
        '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
        '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
        '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
        '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
        '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
        '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
        '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
        '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
        '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
        '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
        '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
        '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
        '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
        '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
        '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
        '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
        '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
        '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
        '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
        '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
        '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
        '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
        '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
        '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
    ].join(",\n  ") + "\n]";


function createCenturyLifeSpanObj(ancestors_file) {
    var jsonObj = JSON.parse(ancestors_file);

    var century;
    var lifeSpan;
    var pairStr = "";

    for (var i = 0; i < jsonObj.length; i++) {

        lifeSpan = (jsonObj[i].died - jsonObj[i].born);
        century = Math.ceil(jsonObj[i].died / 100);

        if (i == jsonObj.length - 1)
            pairStr += JSON.stringify({Century: century, LifeSpan: lifeSpan});
        else
            pairStr += JSON.stringify({Century: century, LifeSpan: lifeSpan}) + ',';
    }

    jsonObj = JSON.parse("[" + pairStr + "]");

    jsonObj.sort(function (a, b) {
            return a.Century - b.Century;
        }
    );

    //console.log(jsonObj);
    return jsonObj;
}

function formatCenturyLifeSpan(century, averageLifeSpan) {

    function average(array) {
        function plus(a, b) {
            return a + b;
        }

        return array.reduce(plus) / array.length;
    }

    var strCentury = "";

    if (century != 0)
        strCentury = century + ":" + parseFloat(average(averageLifeSpan)).toFixed(1) + "\n";

    //console.log(strCentury);
    return strCentury;
}

function predictLifeSpan(anc_file) {

    var pairCenturyLifeSpan = createCenturyLifeSpanObj(anc_file);
    var currCentury = 0;
    var lifeSpan = [];
    var resCenturyLifeSpan = "";

    for (var j = 0; j < pairCenturyLifeSpan.length; j++) {

        if (currCentury != pairCenturyLifeSpan[j].Century) {
            /!* if start new Century:
             * 1. create output for the current Century:LifeSpan
             * 2. prepare the variables for the new Century
             * *!/
            resCenturyLifeSpan += formatCenturyLifeSpan(currCentury, lifeSpan);
            currCentury = pairCenturyLifeSpan[j].Century;
            lifeSpan = [];
        }
        lifeSpan.push(pairCenturyLifeSpan[j].LifeSpan);

    }
    resCenturyLifeSpan += formatCenturyLifeSpan(currCentury, lifeSpan);

    return resCenturyLifeSpan;

}

console.log(predictLifeSpan(ANCESTRY_FILE));
*/

/*/!*
* 1. Create an object
* 2. Create a property associated with function speak
* 3. Call object.property
* *!/
var rabbit = {};
rabbit.speak = function(line) {
    console.log("The rabbit says '" + line + "'");
};
rabbit.speak("I'm alive.");
//


/!*
* 1. Create a constructor
* 2. Create two objects killerRabbit and blackRabbit
* 3. Check the value of the property's Object*!/
function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(killerRabbit.type);
console.log(blackRabbit.type);
//


/!*
* Constructors (in fact, all functions) automatically get a property named prototype, an empty object that derives from Object.prototype.
* *!/
Rabbit.prototype.speak = function(line) {
    console.log("The " + this.type + " rabbit says '" +
        line + "'");
};
blackRabbit.speak("Doom...");*/

/*var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

for (var name in map)
    console.log(name, map[name]);

//console.log("map.pizza", map.pizza);
//console.log("map['touched tree']", map['touched tree']);*/

//
/*
var pile = {
    elements: ["eggshell", "orange peel", "worm"],
    get height() {
        return this.elements.length;
    },
    set height(value) {
        this.elements.push(value);
        console.log(this.elements);
        //console.log("Ignoring attempt to set height to", value);
    }
};

console.log('>>>', Object.getPrototypeOf(pile), Object.getOwnPropertyNames(pile));
console.log('>>>>>>', Object.keys(pile));



console.log(pile.height);
// → 3
pile.height = 100;
// → Ignoring attempt to set height to 100
console.log(pile.height);

pile.height = "Hello";
// → Ignoring attempt to set height to 100
console.log(pile.height);*/

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

/* ****************************************************************************************** */
/* Exercise 2 OO JavaScript */
function sequenceObj() {
    this.currentPosition = 0;
}

sequenceObj.prototype = {
    sequence: [],
    get length() {
        return this.sequence.length;
    },
    get currentPos() {
        return this.currentPosition;
    },
    set currentPos(val) {
        this.currentPosition = val;
    }
};

sequenceObj.prototype.next = function () {

    if (this.currentPos < this.length) {
        this.currentPos = this.currentPos + 1;
        return this.sequence[this.currentPos];
    }
    else
        return null;
};

sequenceObj.prototype.current = function () {

    return this.sequence[this.currentPos];
};


function ArraySeq(arr) {
    var myArrayObj = new sequenceObj();

    myArrayObj.sequence = arr;

    /* next line is for debug */
    console.log('arrayLength-', myArrayObj.length, 'currentValue-', myArrayObj.current(), 'nextTwoValues-', myArrayObj.next(), myArrayObj.next());

    return myArrayObj.sequence;
}


function RangeSeq(b, e) {
    var myRangeSeq = new sequenceObj();

    for (var i = b; i <= e; i++)
        myRangeSeq.sequence.push(i);

    /* next two lines are for debug */
    myRangeSeq.next();
    console.log('arrayLength-', myRangeSeq.length, 'currentValue-', myRangeSeq.current(), 'nextTwoValues-', myRangeSeq.next(), myRangeSeq.next());

    return myRangeSeq.sequence;
}

console.log(new ArraySeq([1, 2]));
console.log(new RangeSeq(111, 122));