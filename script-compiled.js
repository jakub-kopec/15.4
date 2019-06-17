'use strict';

var sayHello = function sayHello() {
    return alert('Hello world!');
};
sayHello();

//Zadanie 1
var hello = 'Hello';
var world = 'World';

var hellorworld = '' + hello + world;

// Zadanie 2
var multiply = function multiply(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

// Zadanie 3
var avr = function avr() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var sum = 0;
    args.forEach(function (arg) {
        sum += arg;
    });
    return sum / args.length;
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// Zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

// Zadanie 5
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = data[2],
    lastname = data[4];

console.log(firstname);
console.log(lastname);
