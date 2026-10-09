'use strict';

// Поднятие
function hoisting() {
    console.log(x)
    var x = "I need more bullets";
    console.log(x);
}
hoisting();

//Скалярные и Ссылочные типы данных

const incScalar = (n) => ++n;

const a = 5;
const b = incScalar(1);
console.dir({a,b});

const incReference = (num) => ++num.n;

const obj = {n:5};
incReference(obj);
console.dir(obj);

//Типы объектов
//1. С ключами
const arr = [true, 'hello', 5, 12, -200, false, false, 'word', {z: 7}, null, 0, undefined, 'undefined', NaN, ['NoizeMC', 41]];

const hashSt = {
    object: 0,
    number: 0,
    string: 0,
    boolean: 0,
    undefined: 0,
}

for (const arrItem of arr){
    const type = typeof arrItem;
    // console.log(arrItem, type);
    ++hashSt[type];
}

console.log(hashSt);

//2. Динамическо добавление ключей
const hashDyn = {};

for (const arrItem of arr){
    const type = typeof arrItem;
    
    // if (type in hashDyn){
    //     ++hashDyn[type];
    // }
    // else {
    //     hashDyn[type] = 1
    // }

    if (!(type in hashDyn)){
        hashDyn[type] = 0;
    }
    ++hashDyn[type];

}

console.log(hashDyn);