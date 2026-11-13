'use strict';

function unique(array) {
    return [...new Set(array)];
}

const numbers = unique([2, 1, 1, 3, 2]);
console.log(numbers);

const words = unique(['top', 'bottom', 'top', 'left']);
console.log(words);
