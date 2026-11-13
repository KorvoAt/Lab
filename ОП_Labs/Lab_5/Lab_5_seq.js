'use strict';

const seq = (...fns) => {
    return function (arg) {
        if (typeof arg === 'function') {
            return seq(...fns, arg);
        }
        return fns.reduceRight((acc, fn) => fn(acc), arg);
    }
}

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));