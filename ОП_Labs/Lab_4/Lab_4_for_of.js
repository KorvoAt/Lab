'use strict';

function sum(... args) {
    let value = 0;
    for (const num of args) {
        value += num;
    }
    return value;
}
const b = sum(0);
console.log(b);