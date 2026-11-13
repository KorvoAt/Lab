'use strict';

function iterate(object, callback) {
    return Object.keys(object).forEach((key) => callback(key, object[key]))
}

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});