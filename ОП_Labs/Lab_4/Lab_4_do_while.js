'use strict';

function sum(... args) {
    let value = 0;
    let i = 0;
    do {
        value += args[i];
        ++i;
    } while (i < args.length); 
    return value;
}
const d = sum(1, -1, 1);
console.log(d);