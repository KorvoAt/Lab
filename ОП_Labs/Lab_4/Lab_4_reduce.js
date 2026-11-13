'use strict';

function sum(... args) {
    let value = args.reduce((a, b) => (a+b), 0); 
    return value;
}
const e = sum(10, -1, -1, -1);
console.log(e);