'use strict';

const array = () => {
    const value = [];
    const get = (i) => value[i];
    get.push = (x) => value.push(x);
    get.pop = () => value.pop();
    return get;
};


const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());