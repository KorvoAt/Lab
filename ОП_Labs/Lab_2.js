'use strict';


// Идентификаторы
let name = 'Olexiy';
const year = 2008;

function Hello(name) {
    console.log('Привіт, ', name);
};

Hello(name);


// Циклы


function range(start, end) {
    const array = [];
    let st = start;
    let nd = end;
    while (st <= nd) {
        array.push(st);
        ++st;
    };
    return array;
};

console.log(range(15, 30))

function rangeOdd(start, end) {
    const array = [];
    let st = start;
    let nd = end;
    while (st <= nd) {
        if (st % 2 == 1) {
            array.push(st);
        };
        ++st;
    };
    return array;
};

console.log(rangeOdd(15, 30))


// Функции

const calculate = [];
function avarage (a, b) {
    return (a+b)/2;
};

function square (x) {
    return x*x;
};

function cube (x) {
    return x*x*x;
};

for (let i = 0; i < 10; ++i) {
    calculate[i] = avarage(square(i), cube(i));
};

console.log(calculate);

// Объекты
function fn () {
    const objConst = {
        name: 'csgo',
    };
    let objLet = {
        name: 'cs2',
    };
    objConst.name = 'cs1.6';
    objLet.name = 'cs3';
    console.log(objConst);
    console.log(objLet);
    try {
        objConst = {game: 'Half-Life 3'};
        console.log(objConst);
        null.foo;
        } catch (error) {
        console.log(error.name);     
        console.log(error.message);  
}
    objLet = {game: 'Portal 3'};
    console.log(objLet);
};
fn();

function createUser (name, city) {
    let user = {
        name: name,
        city: city,
    };
    return user;
};
console.log(createUser('Corvo Attano', 'Dunwall'));


// Коллекции
const phoneBook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Corvo Attano', phone: '+380501112233' },
  { name: 'Emily Kaldwin', phone: '+380671234567' },
  { name: 'Daud', phone: '+380931112244' },
];

function findPhoneByName1 (name) {
    for (let i = 0; i < phoneBook.length; ++i){
        if (name == phoneBook[i].name){
            return phoneBook[i].phone;
        };
    };
};
console.log(findPhoneByName1('Corvo Attano'));

const phoneDict = {
  'Marcus Aurelius': '+380445554433',
  'Corvo Attano': '+380501112233',
  'Emily Kaldwin': '+380671234567',
  'Daud': '+380931112244',
};

function findPhoneByName2 (name) {
    return phoneDict[name];
};
console.log(findPhoneByName2('Daud'));