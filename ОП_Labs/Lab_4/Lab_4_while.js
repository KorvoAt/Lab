'use strict';

function sum(... args) {
    let value = 0;
    let i = 0;
    while (i < args.length) {
        value += args[i];
        ++i;
    }
    return value;
}
const c = sum();
console.log(c);