'use strict';

const contract = (fn, ...types) => (...args) => {

    for (let i = 0; i < args.length; ++i) {
        const arg = args[i];
        const argType = types[i].name.toLowerCase();
        if (typeof arg !== argType) {
            throw new TypeError('Типи аргументів не співпадають з ' + argType);
        }
    }

    const result = fn(...args);
    const resType = types.at(-1).name.toLowerCase()
    if (typeof result !== resType) {
            throw new TypeError('Тип результату не співпадє з ' + resType);
        }
    
    return result;    

}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const resNum = addNumbers(2, 3);
console.dir(resNum);


const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const resStr = concatStrings('Hello ', 'world!');
console.dir(resStr); 