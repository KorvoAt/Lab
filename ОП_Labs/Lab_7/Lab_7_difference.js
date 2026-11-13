'use strict';

function difference(array1, array2) {
    return array1.filter((x) => !array2.includes(x));
}

const arrayNum1 = [7, -2, 10, 5, 0];
const arrayNum2 = [0, 10];
const resultNum = difference(arrayNum1, arrayNum2);
console.log(resultNum);


const arrayWords1 = ['Beijing', 'Kiyv'];
const arrayWords2 = ['Kiyv', 'London', 'Baghdad'];
const resultWords = difference(arrayWords1, arrayWords2);
console.log(resultWords);
