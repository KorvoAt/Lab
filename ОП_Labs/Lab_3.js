'use strict';

// 1 и 2
function random(min, max) {
    if (max === undefined) {
    max = min;
    min = 0;
    };
    return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(random(7));
console.log(random(0, 10));


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters){
    let key = '';
    for (let i = 0; i < length; ++i){
        key += characters[random(0, characters.length - 1)];
    };
    return key;
};

const key = generateKey(16, characters);
console.log(key); 
console.log(key.length); 


// 3
const ip = '127.0.0.1';
function mathWithIP (ip) {
    const ipSplitDot = ip.split('.');
    const shiftAdd = (acc, ipSplitDot) => (acc << 8) + parseInt(ipSplitDot, 10);
    return ipSplitDot.reduce(shiftAdd, 0);
}

console.log(mathWithIP(ip));

// 4
const iface = {
  m1: x => [x],
  m2: function (x, y) { return [x, y]; },
  m3(x, y, z) { return [x, y, z]; }
};

function matrix (iface) {
    const keys = [];
    for (const key in iface){
        const fn = iface[key];
        if (typeof fn === 'function') {
            keys.push([key, fn.length]);
    }
  }
  return keys;
};

console.log(matrix(iface));
