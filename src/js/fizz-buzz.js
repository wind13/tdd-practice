"use strict";
exports.__esModule = true;
function add(a, b) {
    return a + b;
}
exports.add = add;
function fizzbuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz';
    }
    if (n % 3 === 0) {
        return 'Fizz';
    }
    if (n % 5 === 0) {
        return 'Buzz';
    }
    return '' + n;
}
exports.fizzbuzz = fizzbuzz;
for (var i = 0; i < 100; i++) {
    console.log(fizzbuzz(i));
}
