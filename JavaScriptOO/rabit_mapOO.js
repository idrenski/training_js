/**
 * Created by idrenski on 11/6/2015.
 */
/*
 * 1. Create an object
 * 2. Create a property associated with function speak
 * 3. Call object.property
 * */
var rabbit = {};
rabbit.speak = function (line) {
    console.log("The rabbit says '" + line + "'");
};
rabbit.speak("I'm alive.");
//


/*
 * 1. Create a constructor
 * 2. Create two objects killerRabbit and blackRabbit
 * 3. Check the value of the property's Object*/
function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(killerRabbit.type);
console.log(blackRabbit.type);
//


/*
 * Constructors (in fact, all functions) automatically get a property named prototype, an empty object that derives from Object.prototype.
 * */
Rabbit.prototype.speak = function (line) {
    console.log("The " + this.type + " rabbit says '" +
        line + "'");
};
blackRabbit.speak("Doom...");

var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

for (var name in map)
    console.log(name, map[name]);

//console.log("map.pizza", map.pizza);
//console.log("map['touched tree']", map['touched tree']);

//
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
console.log(pile.height);


